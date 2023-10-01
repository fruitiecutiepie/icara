import { createSignal, onCleanup, onMount } from 'solid-js';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType, NotFoundException } from '@zxing/library';

export default function Scan() {
  const [result, setResult] = createSignal("");
  const [videoElement, setVideoElement] = createSignal<HTMLVideoElement | undefined>(); // Use createSignal to store the video element
  
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
      return;
    }

    const selectedDeviceId = videoInputDevices[0].deviceId;
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
    });

  });
  
  onCleanup(() => {
    codeReader.reset();
  });

  const handleCloseClick = () => {
    window.history.back();
  }
  
  return (
    <div class="relative flex flex-col h-full justify-center items-center md:mt-32">
      <video ref={setVideoElement} class="w-screen h-screen md:h-fit object-cover -scale-x-100 md:rounded-xl"></video>
      <div
        class="absolute flex w-full justify-between items-center top-0 p-12"
      >
        <button type="button" class="material-symbols-outlined text-white select-none" onClick={handleCloseClick}>
          close
        </button>
        <h1
          class="text-lg text-white select-none"
        >
          Scan Barcode
        </h1>
        <span class="material-symbols-outlined text-white invisible select-none">
          close
        </span>
      </div>
      <div class="w-3/4 h-1/4 md:w-1/2 md:h-1/3 border-2 rounded-xl absolute"></div>
    </div>
  );
}
