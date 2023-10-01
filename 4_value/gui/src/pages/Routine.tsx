import { addDoc, collection } from "firebase/firestore";
import { createResource, createSignal } from "solid-js";
import db from "../../db";

export default function Routine() {
  const [name, setName] = createSignal("");
  const [description, setDescription] = createSignal("");
  const [quantity, setQuantity] = createSignal(0);
  const [price, setPrice] = createSignal(0);
  const [image, setImage] = createSignal("");

  const createItem = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "items"), {
        name: "Black Rice Hyaluronic Toner",
        brand: "Haruharu WONDER",
        type: "Toner"
      });
      console.log("Hi from NewItem! The document was successfully written with ID: ", docRef.id);
    } catch (e) {
      console.error("Hi from NewItem! Error adding document: ", e);
    }
  }

  // const [addItem, { loading, error }] = createResource(ADD_ITEM, {
  //   onCompleted: () => {
  //     console.log("Item added!");
  //   },
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <div
      class="flex flex-col w-full pt-9 pb-10 md:px-10 items-center"
    >
      <form action="javascript:void(0)" method="post"
        onSubmit={createItem}
      >
        <div class="flex flex-col my-3 w-full">
          <div class="flex flex-col space-y-3 items-center relative mb-5">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              required
              autocomplete="off"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              class="transition duration-300 w-full md:w-96 rounded-md py-2 px-4 text-sm border border-neutral-300
              focus:border-blue-500 focus:outline-none focus:shadow-blue-500 focus:shadow-[0_0_5px_rgba(0,0,0,0.1)]
              "
            />
            <label for="price"
              class="flex items-center transition duration-150 pointer-events-none
              translate-y-full scale-100 origin-top-left w-full z-[2]
              hover:translate-y-1/2 hover:scale-75 hover:max-w-[calc(100% / 0.75)]
              "
            >Price</label>
            <input
              type="number"
              id="price"
              placeholder="Price"
              onChange={(e) => setPrice(parseInt(e.target.value))}
              class="w-full md:w-96 rounded-md py-2 px-4 text-sm border border-neutral-300
              focus:border-blue-500 focus:outline-none focus:shadow-blue-500 focus:shadow-[0_0_5px_rgba(0,0,0,0.1)]
              "
            />
          </div>

          <div
            class="flex flex-col items-start relative"
          >
            <div
                class="flex items-center transition duration-150 pointer-events-none
                transform translate-y-full scale-100 origin-top-left w-full z-[2]
                focus:translate-y-1/2 focus:scale-75 focus:max-w-[calc(100% / 0.75)]"
            >
                <div
                    class="overflow-hidden whitespace-nowrap overflow-ellipsis"
                >
                    Floating label
                </div>
            </div>
            <div
              class="flex relative grow w-full"
            >
              <input type="text"
                class="opacity-0 focus:opacity-100 inline-block relative box-border
                z-[1] w-full max-w-full p-0 m-0 border-0 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* <div
            class="
            rounded-md border-transparent relative h-1"
          >
            <input type="text"
              class="text-left overflow-ellipsis border border-solid box-border border-neutral-300 inline-block
              focus:outline-none"
            />
            <span
              class="overflow-ellipsis z-[3]"
            >
              Email or Phone Number
            </span>
          </div> */}

        </div>
        <div
          class="flex flex-col items-center"
        >
          <button
            type="submit"
            class="rounded-md mt-1 py-3 px-5 w-auto text-white text-sm hover:bg-neutral-600 transition duration-300 bg-red-600"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
