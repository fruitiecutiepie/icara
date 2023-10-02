import { For, mergeProps } from "solid-js";

type Props = {
  heading: string,
  icons?: string[],
}

export default function TabHeading(props: Props) {
  const merged = mergeProps(props);
  return (
    <div
      class="flex w-full justify-between items-center"
    >
      <h2
        class="text-xl font-display font-bold"
      >
        {merged.heading}
      </h2>
      {merged.icons && (
        <div
          class="space-x-6"
        >
          <For each={merged.icons}>
            {(icon) => (
              <button type="button" class="material-symbols-outlined text-2xl select-none">
                {icon}
              </button>
            )}
          </For>
        </div>
      )}
    </div>
  )
}