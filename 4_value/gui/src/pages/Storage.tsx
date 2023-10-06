import TabHeading from "../components/TabHeading";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Storage() {
  return (
    <div
      class=""
    >
      <TabHeading heading="Storage" goBack />
      <FloatingActionButton path="/scan" icon="barcode_scanner" />
      <div
        class="pt-5 px-5"
      ></div>
    </div>
  );
}
