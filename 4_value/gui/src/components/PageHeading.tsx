import { mergeProps } from "solid-js";

type Props = {
  heading: string,
}

export default function PageHeading(props: Props) {
  const merged = mergeProps(props);

  return (
    <h1
      class="font-display font-bold text-4xl md:hidden px-5"
    >
      {merged.heading}
    </h1>
  )
}