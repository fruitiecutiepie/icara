import TabHeading from "../components/TabHeading";

export default function Archive() {
  return (
    <div>
      <div
        class="flex flex-col justify-center h-14 p-5 md:h-auto md:pt-12 md:px-10"
      >
        <TabHeading
          heading="Archive"
          goBack
        />
      </div>
    </div>
  );
}
