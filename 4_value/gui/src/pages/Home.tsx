import TabHeading from "../components/TabHeading";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Home() {
  return (
    <div>
      <div
        class="flex flex-col justify-center h-14 p-5 md:h-auto md:pt-12 md:px-10"
      >
        <TabHeading
          heading="Home"
        />
        <FloatingActionButton path="/scan" icon="barcode_scanner" />
      </div>
    </div>
  );
}