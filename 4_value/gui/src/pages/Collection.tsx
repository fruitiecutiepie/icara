import TabHeading from "../components/TabHeading";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Collection() {
  return (
    <div>
      <div
        class="flex flex-col justify-center h-14 p-5 md:h-auto md:pt-12 md:px-10"
      >
        <div
          class="flex-col hidden md:flex"
        >
          <TabHeading heading="Collection" icons={["shadow_add"]} />
        </div>
        <div
          class="flex flex-col md:hidden"
        >
          <TabHeading heading="Collection" icons={["archive", "home_storage"]} />
        </div>
        <FloatingActionButton path="/scan" icon="barcode_scanner" />
      </div>
    </div>
  );
}
