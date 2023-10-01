export default function Collection() {
  return (
    <div
      class="px-10 pt-12"
    >
      <div
        class="flex w-full justify-between items-center"
      >
        <h2
          class="text-xl font-bold"
        >
          Collection
        </h2>
        <div
          class="space-x-6"
        >
          <button type="button" class="material-symbols-outlined select-none">
            archive
          </button>
          <button type="button" class="material-symbols-outlined select-none">
            inventory_2
          </button>
        </div>
      </div>
    </div>
  );
}
