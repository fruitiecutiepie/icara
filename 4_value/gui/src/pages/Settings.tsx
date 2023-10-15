import PageHeading from "../components/PageHeading";
import { auth } from '../common/firebaseClientInit'
import { signOut } from "firebase/auth";

export default function Settings() {
  const logOut = () => {
    signOut(auth)
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <div
      class=""
    >
      <PageHeading heading="Settings" />
      <div
        class="pt-5 px-5 min-h-screen"
      >
        <div 
          class="flex flex-col items-center"
        >
          <button type="submit"
            onClick={logOut}
            class="flex items-center justify-center rounded-full text-white text-xl font-display bg-indigo-500 w-full my-4 py-3 disabled:bg-indigo-300 hover:bg-indigo-600 transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}