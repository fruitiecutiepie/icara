import { A } from "@solidjs/router";
import { mergeProps } from "solid-js";

type Props = {
  path: string,
  icon: string,
}

export default function TabButton(props: Props) {
  const merged = mergeProps(props);
  
  return (
    <div
      class="flex justify-end right-5 bottom-[4.5rem] fixed"
    >
      <A
        href={merged.path}
        class="
          flex justify-center rounded-full text-white bg-red-500 shadow-[0_8px_28px_rgba(0,0,0,0.08)]
          w-14 h-14 p-1 hover:bg-neutral-600 transition duration-300 md:hidden
        "
        activeClass="material-symbols-filled"
      >
        <span
          class="material-symbols-outlined self-center lg:hidden
          "
        >
          {merged.icon}
        </span>
      </A>
    </div>
  )
}