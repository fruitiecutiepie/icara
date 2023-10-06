import TabHeading from "../components/TabHeading";
import FloatingActionButton from "../components/FloatingActionButton";
import PageHeading from "../components/PageHeading";

export default function Storage() {
  return (
    <div
      class=""
    >
      <TabHeading heading="Storage" goBack />
      <PageHeading heading="Storage" />
      <FloatingActionButton path="/scan" icon="barcode_scanner" />
      <div
        class="pt-5 px-5"
      ></div>
    </div>
  );
}
