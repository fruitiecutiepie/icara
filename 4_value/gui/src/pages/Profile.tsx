import TabHeading from "../components/TabHeading";

export default function Profile() {
  return (
    <div
      class="px-5"
    >
      <TabHeading
        heading="Profile"
        icon_path={[{ icon: "settings", path: "/settings" }]}
      />
      <div
        class="pt-5 md:pt-16"
      ></div>
    </div>
  );
}