import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseClientInit'

export default function Forgot() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email(), password())
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((err) => {
        setError(err.code + err.message)
      });
  }

  return (
    <div
      class="flex flex-col pt-5 px-5"
    >
      <h1
        class="font-display font-bold text-4xl text-center"
      >
        Sign Up
      </h1>
      <div
        class="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg justify-center self-center mt-5"
      >
        <form action="javascript:void(0)" method="post">
          <div class="flex flex-col my-2 w-full">
            <div class="flex flex-col items-center">
              <input
                type="email"
                id="email"
                required
                placeholder={"Email Address"}
                autocomplete="email"
                onChange={(e) => setEmail(e.target.value)}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
              />
              <input
                type="password"
                id="password"
                required
                placeholder="Password"
                autocomplete="password"
                onChange={(e) => setPassword(e.target.value)}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
              />
              <input
                type="password"
                id="password"
                required
                placeholder="Password"
                autocomplete="password"
                onChange={(e) => setPassword(e.target.value)}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <div 
            class="flex flex-col items-center"
          >
            <button type="submit" onClick={signUp}
              class="
              flex items-center justify-center rounded-full text-white bg-indigo-500 shadow-[0_8px_28px_rgba(0,0,0,0.08)]
              w-48 h-12 lg:w-full md:p-1 md:my-4 lg:py-3 lg:px-16 hover:scale-105 active:scale-95 lg:hover:scale-100 hover:bg-indigo-600 transition duration-300
              text-xl font-display
            "
            >
              Sign Up
            </button>
          </div>
          <div
            class="flex flex-col"
          >
            <p
              class="text-sm mt-2 self-center"
            >Already a user? <A href="/signin" class="text-indigo-500">Sign in</A>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}