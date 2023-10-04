import TabHeading from "../components/TabHeading";

export default function Notifications() {
  return (
    <div
      class="px-5 md:pt-12"
    >
      <div
        class="flex flex-col justify-center h-14 p-5 md:h-auto md:pt-12 md:px-10"
      >
        <TabHeading
          heading="Notifications"
          icon_path={[{ icon: "settings", path: "/settings/notifications" }]}
        />
      </div>
    </div>
  );
}