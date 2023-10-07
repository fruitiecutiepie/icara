import { Show, createSignal, onCleanup, onMount } from 'solid-js';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType, NotFoundException } from '@zxing/library';
import { A, Navigate } from '@solidjs/router';

export default function Scan() {
  const [result, setResult] = createSignal("");
  const [backCamera, setBackCamera] = createSignal<MediaDeviceInfo | undefined>(); // TODO: Use this to flip the video element
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

    setBackCamera(backCamera);

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
  
  return (
    <Show when={!result()} fallback={<Navigate href={`/items/add/${result()}`} />}>
      <div class="relative select-none overflow-clip flex flex-col h-full justify-center items-center">
        <video
          ref={setVideoElement}
          class={`w-screen h-screen object-cover lg:h-full ${backCamera() ? "" : "-scale-x-100"}`}
        >
        </video>
        <div
          class="flex flex-col items-center justify-center absolute"
        >
          <div class="h-1/4 w-5/6 lg:w-1/3 lg:h-1/3 md:max-w-xs lg:max-h-48 border-2 border-white rounded-xl fixed"></div>
        </div>
        <div
          class="flex flex-col w-full justify-center items-center top-0 h-14 py-5 md:h-auto"
        >
          <A
            class="bottom-0 pb-safe w-full text-center font-display bg-transparent"
            href="/items/add"
          >
            Skip
          </A>
        </div>
      </div>
    </Show>
  );
}
