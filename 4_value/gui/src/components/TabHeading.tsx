import { A } from "@solidjs/router";
import { For, mergeProps } from "solid-js";

type Props = {
  heading: string,
  icon_path?: { icon: string, path: string }[],
  goBack?: boolean,
}

export default function TabHeading(props: Props) {
  const merged = mergeProps(props);

  const goBack = () => {
    window.history.back();
  }

  return (
    <div
      class="flex w-full"
    >
      <div
        class="flex w-1/3 items-center justify-start"
      >
        {merged.goBack && (
          <button class="material-symbols-outlined select-none" onClick={goBack}>
            arrow_back
          </button>
        )}
      </div>
      <div
        class="w-1/3 flex items-center justify-center"
      >
        <h2
          class="flex items-center text-xl font-display font-bold"
        >
          {merged.heading}
        </h2>
      </div>
      <div
        class="w-1/3 flex items-center justify-end"
      >
        {merged.icon_path && (
          <div
            class="flex space-x-5"
          >
            <For each={merged.icon_path}>
              {({ icon, path }) => (
                <A
                  href={path}
                  class="flex items-center"
                >
                  <span
                    class="material-symbols-outlined select-none"
                  >
                    {icon}
                  </span>
                </A>
              )}
            </For>
          </div>
        )}
      </div>
    </div>
  )
}