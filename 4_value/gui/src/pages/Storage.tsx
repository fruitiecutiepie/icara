import TabHeading from "../components/TabHeading";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Storage() {
  return (
    <div
      class="px-5"
    >
      <TabHeading heading="Storage" goBack />
      <FloatingActionButton path="/scan" icon="barcode_scanner" />
      <div
        class="pt-5 md:pt-16"
      ></div>
    </div>
  );
}
