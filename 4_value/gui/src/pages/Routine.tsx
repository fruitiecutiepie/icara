import { addDoc, collection } from "firebase/firestore";
import { createResource, createSignal } from "solid-js";
import db from "../../db";
import TabHeading from "../components/TabHeading";
import FloatingActionButton from "../components/FloatingActionButton";

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
      class="px-5"
    >
      <div
        class="flex-col hidden md:flex"
      >
        <TabHeading
          heading="Routine"
            icon_path={[
              { icon: "settings", path: "/settings/routine" },
              { icon: "shadow_add", path: "/routine/add" }
            ]}
        />
      </div>
      <div
        class="flex flex-col md:hidden"
      >
        <TabHeading
          heading="Routine"
          icon_path={[{ icon: "settings", path: "/settings/routine" }]}
        />
      </div>
      <FloatingActionButton path="/routine/add" icon="add" />
      <div
        class="pt-5 md:pt-16"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue mauris, semper eu molestie ut, gravida sit amet risus. Vivamus vitae nibh quis turpis dignissim mollis. Donec euismod, ex ultricies tincidunt porttitor, sem sem pellentesque dolor, eu pulvinar elit dui vitae nisl. Vivamus dignissim rutrum sapien, sed sollicitudin turpis imperdiet quis. Donec lobortis cursus ante quis blandit. Sed nec lorem nec est tristique laoreet. Curabitur ac diam maximus, vehicula turpis vel, rutrum arcu. Vivamus fringilla velit ut nulla congue, in dictum dui iaculis. Duis leo lorem, dapibus vel porta eget, bibendum et urna. Praesent lobortis metus eget nibh lacinia faucibus. Nulla ultricies congue tellus. Quisque mi purus, ornare a nisi vitae, vehicula volutpat ligula. Mauris posuere nulla quis lorem tincidunt mattis. In molestie ante non vehicula elementum. Donec urna massa, cursus a accumsan vitae, venenatis quis purus. Ut neque lorem, tristique vel mi mattis, faucibus varius arcu. Sed luctus sollicitudin magna nec porta. Aliquam id lorem vitae justo auctor consequat. Nunc tellus arcu, finibus ac leo quis, dignissim ultrices ante. Phasellus id vestibulum tellus. Nunc rhoncus volutpat leo, nec laoreet ante malesuada sit amet. Nulla sit amet lacinia felis, nec posuere lorem. Morbi consectetur lorem nec interdum efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus hendrerit, risus ac ultricies placerat, dui nibh mattis lectus, in convallis diam nulla sed dui. Donec condimentum nunc nec justo feugiat, ut porttitor velit condimentum. Nullam velit ligula, accumsan a lectus vitae, placerat ultricies quam. Duis bibendum sodales nibh. Aenean volutpat mauris nec purus placerat maximus. Fusce et mollis ante, at semper turpis. Ut convallis aliquet mattis. Nunc cursus odio sit amet ipsum venenatis consectetur. Nulla facilisi. Etiam posuere efficitur quam, in consectetur massa vestibulum sit amet. Donec ut nunc nec ante elementum porttitor. Ut malesuada eros ac magna tincidunt efficitur. In hac habitasse platea dictumst. Praesent pellentesque, tellus quis tristique ultricies, magna nisi ullamcorper justo, at dictum ligula neque ut elit. Vivamus ullamcorper purus vel lorem suscipit, vitae feugiat elit euismod. Etiam facilisis ante dui, in ullamcorper massa dapibus et. Morbi porta tellus vel vestibulum sagittis. Cras eu enim eget metus mollis convallis. Morbi egestas tempus urna, pharetra posuere ex lacinia ac. Sed ut elit ligula. Proin hendrerit blandit mi vulputate ultricies. Sed id maximus neque. Aliquam elementum iaculis euismod. Suspendisse eget erat quis ipsum tempor malesuada quis sed lacus. Sed lacinia aliquam risus, quis mollis enim placerat quis. Donec pellentesque varius mi, sit amet blandit lectus aliquet nec. Etiam vulputate ipsum at felis finibus, id tempus sem aliquam. Nam imperdiet id tortor in finibus. Praesent vehicula magna ut nibh tristique ornare. Quisque metus purus, maximus feugiat ante congue, rutrum condimentum tellus. Maecenas lobortis mi eget nunc hendrerit semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nibh nunc, condimentum vel tortor in, ornare tincidunt odio. Nam elementum at augue vel rutrum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue mauris, semper eu molestie ut, gravida sit amet risus. Vivamus vitae nibh quis turpis dignissim mollis. Donec euismod, ex ultricies tincidunt porttitor, sem sem pellentesque dolor, eu pulvinar elit dui vitae nisl. Vivamus dignissim rutrum sapien, sed sollicitudin turpis imperdiet quis. Donec lobortis cursus ante quis blandit. Sed nec lorem nec est tristique laoreet. Curabitur ac diam maximus, vehicula turpis vel, rutrum arcu. Vivamus fringilla velit ut nulla congue, in dictum dui iaculis. Duis leo lorem, dapibus vel porta eget, bibendum et urna. Praesent lobortis metus eget nibh lacinia faucibus. Nulla ultricies congue tellus. Quisque mi purus, ornare a nisi vitae, vehicula volutpat ligula. Mauris posuere nulla quis lorem tincidunt mattis. In molestie ante non vehicula elementum. Donec urna massa, cursus a accumsan vitae, venenatis quis purus. Ut neque lorem, tristique vel mi mattis, faucibus varius arcu. Sed luctus sollicitudin magna nec porta. Aliquam id lorem vitae justo auctor consequat. Nunc tellus arcu, finibus ac leo quis, dignissim ultrices ante. Phasellus id vestibulum tellus. Nunc rhoncus volutpat leo, nec laoreet ante malesuada sit amet. Nulla sit amet lacinia felis, nec posuere lorem. Morbi consectetur lorem nec interdum efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus hendrerit, risus ac ultricies placerat, dui nibh mattis lectus, in convallis diam nulla sed dui. Donec condimentum nunc nec justo feugiat, ut porttitor velit condimentum. Nullam velit ligula, accumsan a lectus vitae, placerat ultricies quam. Duis bibendum sodales nibh. Aenean volutpat mauris nec purus placerat maximus. Fusce et mollis ante, at semper turpis. Ut convallis aliquet mattis. Nunc cursus odio sit amet ipsum venenatis consectetur. Nulla facilisi. Etiam posuere efficitur quam, in consectetur massa vestibulum sit amet. Donec ut nunc nec ante elementum porttitor. Ut malesuada eros ac magna tincidunt efficitur. In hac habitasse platea dictumst. Praesent pellentesque, tellus quis tristique ultricies, magna nisi ullamcorper justo, at dictum ligula neque ut elit. Vivamus ullamcorper purus vel lorem suscipit, vitae feugiat elit euismod. Etiam facilisis ante dui, in ullamcorper massa dapibus et. Morbi porta tellus vel vestibulum sagittis. Cras eu enim eget metus mollis convallis. Morbi egestas tempus urna, pharetra posuere ex lacinia ac. Sed ut elit ligula. Proin hendrerit blandit mi vulputate ultricies. Sed id maximus neque. Aliquam elementum iaculis euismod. Suspendisse eget erat quis ipsum tempor malesuada quis sed lacus. Sed lacinia aliquam risus, quis mollis enim placerat quis. Donec pellentesque varius mi, sit amet blandit lectus aliquet nec. Etiam vulputate ipsum at felis finibus, id tempus sem aliquam. Nam imperdiet id tortor in finibus. Praesent vehicula magna ut nibh tristique ornare. Quisque metus purus, maximus feugiat ante congue, rutrum condimentum tellus. Maecenas lobortis mi eget nunc hendrerit semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nibh nunc, condimentum vel tortor in, ornare tincidunt odio. Nam elementum at augue vel rutrum.</p>
      </div>

      <div
        class="flex flex-col w-full pt-9 pb-10 md:px-10 items-center"
      >
        <form
          action="javascript:void(0)"
          method="post"
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
    </div>
  );
}
