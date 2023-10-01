import { Show, createSignal, onCleanup, onMount } from 'solid-js';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType, NotFoundException } from '@zxing/library';
import { Navigate } from '@solidjs/router';

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
      // TODO: Handle no camera better
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
      // TODO: Handle barcode format not supported
    });

  });
  
  onCleanup(() => {
    codeReader.reset();
  });

  const handleCloseClick = () => {
    window.history.back();
  }
  
  return (
    <Show when={!result()} fallback={<Navigate href={`/new/${result()}`} />}>
      <div class="relative flex flex-col h-full justify-center items-center md:mt-32">
        <video ref={setVideoElement} class="w-screen h-screen md:h-fit object-cover -scale-x-100 md:rounded-xl"></video>
        <div
          class="absolute flex w-full justify-between items-center top-0 px-10 pt-12"
        >
          <button type="button" class="material-symbols-outlined text-white select-none" onClick={handleCloseClick}>
            close
          </button>
          <h2
            class="text-xl font-bold text-white select-none"
          >
            Scan
          </h2>
          <span class="material-symbols-outlined text-white invisible select-none">
            close
          </span>
        </div>
        <div class="w-3/4 h-1/4 md:w-1/2 md:h-1/3 border-2 rounded-xl absolute"></div>
      </div>
    </Show>
  );
}
