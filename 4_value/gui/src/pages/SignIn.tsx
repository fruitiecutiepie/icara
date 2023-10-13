import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseClientInit'

export default function SignIn() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  
  const signIn = () => {
    signInWithEmailAndPassword(auth, email(), password())
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((err) => {
        // setError("Incorrect. Please try again.")
        setError(err.code + err.message)
      });
  }
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in');
    } else {
      console.log('User is signed out');
    }
  });

  return (
    <div
      // class="flex flex-col"
    >
      <div
        class="flex flex-col pt-5 px-5"
      >
        <h1
          class="font-display font-bold text-4xl text-center"
        >
          Sign In
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
                  value={email()}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  class="border-x-0 border-t-0 border-b bg-transparent w-full mb-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
                />
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="Password"
                  autocomplete="password"
                  value={password()}
                  onInput={(e) => setPassword(e.currentTarget.value)}
                  class="border-x-0 border-t-0 border-b bg-transparent w-full mb-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
                />
              </div>
              {error() && <div class="text-sm mt-2 text-red-500">{error()}</div>}
              <A href="/forgot" class="text-sm mt-2 self-end text-indigo-500">Forgot password?</A>
            </div>
            <div 
              class="flex flex-col items-center my-4"
            >
              <button type="submit" onClick={signIn}
                class="
                flex items-center justify-center rounded-full text-white bg-indigo-500 shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                w-48 h-12 lg:w-full p-1 lg:py-3 lg:px-16 hover:scale-105 active:scale-95 lg:hover:scale-100 hover:bg-indigo-600 transition duration-300
                text-xl font-display
              "
              >
                Sign In
              </button>
            </div>
            <div
              class="flex flex-col text-sm mt-8 items-center"
            >
              <p>
                Not a user yet? 
                <A href="/signup" class="text-indigo-500">
                  Create an account
                </A>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}