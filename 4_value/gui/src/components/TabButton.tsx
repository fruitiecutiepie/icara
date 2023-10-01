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
      class="flex items-center justify-center lg:space-x-4 lg:justify-start w-full"
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