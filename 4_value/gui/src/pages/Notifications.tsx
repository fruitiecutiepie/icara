import TabHeading from "../components/TabHeading";

export default function Notifications() {
  return (
    <div
      class="px-5"
    >
      <TabHeading
        heading="Notifications"
        icon_path={[{ icon: "settings", path: "/settings/notifications" }]}
      />
      <div
        class="pt-5 md:pt-16"
      ></div>
    </div>
  );
}