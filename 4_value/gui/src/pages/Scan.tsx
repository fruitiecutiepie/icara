import { Show, createSignal, onCleanup, onMount } from 'solid-js';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType, NotFoundException } from '@zxing/library';
import { A, Navigate } from '@solidjs/router';

export default function Scan() {
  const [result, setResult] = createSignal("");
  const [backCamera, setBackCamera] = createSignal(true);
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

    if (!videoInputDevices) {
      console.error('No video input devices found');
      alert('No camera detected on your device. Please ensure you have the necessary permissions enabled or try using a different device.');
      return;
    }

    const backCamera = videoInputDevices.find(device => /back|rear/i.test(device.label));
    // TODO: backCamera might be undefined even though there is a back camera
    const selectedDeviceId = backCamera ? backCamera.deviceId : (setBackCamera(false), videoInputDevices[0].deviceId);
    console.log(`Started continuous decode from camera with id ${selectedDeviceId}`);

    codeReader.decodeFromVideoDevice(selectedDeviceId, videoElement(), (result, err) => {
      if (result) {
        console.log(result);
        setResult(result.getText());
      }
      if (err && !(err instanceof NotFoundException)) {
        console.error(err);
        alert('An unexpected error occurred while scanning. Please try again.');
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
          class="flex flex-col items-center justify-end absolute"
        >
          <div class="h-1/4 w-5/6 lg:w-1/3 lg:h-1/3 md:max-w-xs lg:max-h-48 border-2 border-white rounded-xl fixed"></div>
        </div>
        <div
          class="flex flex-col w-full justify-center items-center"
        >
          <A
            class="bottom-0 pb-safe w-full py-3 my-1 min-h-[3.5rem] text-center font-display bg-transparent"
            href="/items/add"
          >
            Skip
          </A>
        </div>
      </div>
    </Show>
  );
}
