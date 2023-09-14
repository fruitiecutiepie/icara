import { mergeProps } from "solid-js";

type Props = {
  header: string,
  text: string,
  image: string,
}

export default function FeatureCard(props: Props) {
  const merged = mergeProps(props);
  return (
    <div class="md:flex-col mb-10 min-w-fit snap-center">
      <p class="font-bold mb-1 text-sm md:text-base">{merged.header}</p>
      <p class="mb-5 text-xs md:text-sm">{merged.text}</p>
      <img src={merged.image}
        class="rounded-xl"
      />
    </div>
  )
}