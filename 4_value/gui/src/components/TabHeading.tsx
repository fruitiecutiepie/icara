import { A } from "@solidjs/router";
import { For, mergeProps, createSignal, createEffect, onCleanup } from "solid-js";

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

  const [lastScrollTop, setLastScrollTop] = createSignal(0);
  const [isVisible, setIsVisible] = createSignal(true);

  const handleScroll = () => {
    if (window.innerWidth < 768) {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop()) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    }
  }

  window.addEventListener('scroll', handleScroll);

  onCleanup(() => {
    window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div
      // You need to specify/copy each page style config from the parent divs here because of position: fixed
      // TODO: Find a better way to do this, you can't use fixed because of mobile safe area, otherwise figure out how to get around this
      class={`flex fixed top-0 left-0 backdrop-blur-md bg-zinc-50 bg-opacity-70 transform transition-transform duration-300
      w-screen md:w-3/5 lg:w-1/2 md:left-[20%] lg:left-1/4 h-14 p-5 md:h-auto md:pt-12 md:px-10
      ${isVisible() ? 'translate-y-0' : '-translate-y-full'}
      `}
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