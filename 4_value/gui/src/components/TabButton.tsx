import { A } from "@solidjs/router";
import { mergeProps } from "solid-js";

type Props = {
  path: string,
  icon: string,
  label: string,
  noScroll?: boolean,
}

export default function TabButton(props: Props) {
  const merged = mergeProps(props);
  
  return (
    <A
      href={merged.path}
      class="
      flex items-center justify-center w-full py-3 px-5 my-1 mx-1 
      md:mx-0 md:px-3 lg:px-5 lg:space-x-4 lg:justify-start 
      hover:scale-105 active:scale-95 lg:hover:scale-100 md:hover:bg-indigo-600 md:hover:bg-opacity-5 rounded-xl
      "
      activeClass="material-symbols-filled"
      {...(merged.noScroll ? { noScroll: true } : null)}
    >
      <span
        class="material-symbols-outlined self-center"
      >
        {merged.icon}
      </span>
      <span
        class="text-xl font-display hidden lg:flex"
      >
        {merged.label}
      </span>
    </A>
  )
}