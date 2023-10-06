import { Show, createSignal, onCleanup, onMount } from 'solid-js';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType, NotFoundException } from '@zxing/library';
import { A, Navigate } from '@solidjs/router';

export default function Scan() {
  const [result, setResult] = createSignal("");
  const [videoElement, setVideoElement] = createSignal<HTMLVideoElement | undefined>();
  
  const possibleFormats = [
    BarcodeFormat.EAN_8,
    BarcodeFormat.EAN_13,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
  ];
  const hints = new Map<DecodeHintType, any>();
  hints.set(DecodeHintType.POSSIBLE_FORMATS, possibleFormats);
  const codeReader = new BrowserMultiFormatReader(hints);

  onMount(async () => {
    const videoInputDevices = await codeReader.listVideoInputDevices();

    if (!videoInputDevices.length) {
      console.error('No video input devices found');
      // TODO: Handle no camera better
      return;
    }

    const backCamera = videoInputDevices.find(device =>
      /back|rear/i.test(device.label)
    );

    const selectedDeviceId = backCamera ? backCamera.deviceId : videoInputDevices[0].deviceId;
    console.log(`Started continuous decode from camera with id ${selectedDeviceId}`);

    // Use the stored video element here
    codeReader.decodeFromVideoDevice(selectedDeviceId, videoElement(), (result, err) => {
      if (result) {
        console.log(result);
        setResult(result.getText());
      }
      if (err && !(err instanceof NotFoundException)) {
        console.error(err);
      }
      // TODO: Handle barcode format not supported
    });

  });
  
  onCleanup(() => {
    codeReader.reset();
  });

  const goBack = () => {
    window.history.back();
  }
  
  return (
    <Show when={!result()} fallback={<Navigate href={`/items/add/${result()}`} />}>
      <div class="relative select-none flex flex-col h-full justify-center items-center lg:mt-12">
        <video
          ref={setVideoElement}
          class="w-screen h-screen object-cover lg:h-fit lg:rounded-xl"
        >
        </video>
        <div
          class="flex flex-col h-screen w-screen items-center justify-center absolute"
        >
          <div class="h-1/4 w-5/6 lg:w-1/3 lg:h-1/3 md:max-w-xs lg:max-h-48 border-2 border-white rounded-xl fixed"></div>
        </div>
        <div
          class="absolute flex flex-col w-full justify-between items-center top-0 h-14 p-5 lg:h-auto md:pt-12 md:px-10"
        >
          <div
            class="flex w-full"
          >
            <div
              class="flex w-1/3 items-center justify-start"
            >
              <button
                class="material-symbols-outlined text-white"
                onClick={goBack}
              >
                  arrow_back
                </button>
            </div>
            <div
              class="w-1/3 flex items-center justify-center"
            >
              <h2
                class="flex items-center text-xl text-white font-display font-bold"
              >
                Scan
              </h2>
            </div>
            <div
              class="w-1/3 flex items-center justify-end"
            >
            </div>
          </div>
          <A
            class="flex w-full h-14 pb-safe md:pb-12 fixed bottom-0 font-display justify-center items-center text-white lg:text-black"
            href="/items/add"
          >
            Skip
          </A>
        </div>
      </div>
    </Show>
  );
}
