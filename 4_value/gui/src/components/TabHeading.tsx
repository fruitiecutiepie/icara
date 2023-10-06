import { A } from "@solidjs/router";
import { For, mergeProps } from "solid-js";

type Props = {
  heading: string,
  icon_path?: { icon: string, path: string }[],
  goBack?: boolean,
  isVisible: boolean,
}

export default function TabHeading(props: Props) {
  const merged = mergeProps(props);

  const goBack = () => {
    window.history.back();
  }
  
  return (
    <>
      <div
        class={`
          flex flex-col justify-center sticky top-0 pt-safe backdrop-blur-md bg-zinc-50
          ${merged.isVisible ? 'border-b bg-opacity-70' : 'border-b-0 bg-opacity-100'}
        `}
        // Uncomment the line below to hide/show the header on scroll
        // ${merged.isVisible ? 'translate-y-0' : '-translate-y-full'}
      >
        <div
          class="flex transform transition-transform duration-300 w-full md:pt-3 px-5"
        >
          <div
            class="flex w-1/3 items-center justify-start min-h-[3.5rem]"
          >
            {merged.goBack && (
              <button class="material-symbols-outlined select-none" onClick={goBack}>
                arrow_back
              </button>
            )}
          </div>
          <div
            class="w-1/3 flex items-center justify-center min-h-[3.5rem]"
          >
            <h2
              class={`flex items-center text-lg md:text-xl font-display font-bold transition-opacity duration-300 md:opacity-100 ${merged.isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {merged.heading}
            </h2>
          </div>
          <div
            class="w-1/3 flex items-center justify-end min-h-[3.5rem]"
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
      </div>
    </>
  )
}