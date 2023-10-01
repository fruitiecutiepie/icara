import { createSignal, onMount, onCleanup } from 'solid-js';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType, NotFoundException } from '@zxing/library';

export default async function About() {
  const [result, setResult] = createSignal("");

  const possibleFormats = [
    BarcodeFormat.EAN_8,
    BarcodeFormat.EAN_13,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
  ]
  const hints = new Map<DecodeHintType, any>();
  hints.set(DecodeHintType.POSSIBLE_FORMATS, possibleFormats);
  const codeReader = new BrowserMultiFormatReader(hints);
  const videoInputDevices = await codeReader.listVideoInputDevices();
  const selectedDeviceId = videoInputDevices[0].deviceId;
  console.log(`Started continuous decode from camera with id ${selectedDeviceId}`);


  onMount(() => {
    codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
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

  return (
    <div class="flex justify-center">
      <video id="video" class="w-full h-full max-w-screen-xl"></video>
    </div>
  );
}