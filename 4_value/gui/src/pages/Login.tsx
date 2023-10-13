import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseClientInit'

export default function Login() {
  const [formData, setFormData] = createSignal({
    email: '',
    password: '',
  });
  const [error, setError] = createSignal('');
  
  const signIn = () => {
    signInWithEmailAndPassword(auth, formData().email, formData().password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((err) => {
        console.log(err.code)
        console.log(err.message)
        setError("Incorrect. Please try again.")
      });
  }

  return (
    <div
      // class="flex flex-col"
    >
      <div
        class="flex flex-col pt-5 px-5"
      >
        <h1
          class="font-display font-bold text-4xl text-center mb-4"
        >
          Welcome
        </h1>
        <div
          class="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg justify-center self-center"
        >
          <form action="javascript:void(0)" method="post">
            <div class="flex flex-col my-4 w-full">
              <div class="flex flex-col items-center">
                <input
                  type="email"
                  required
                  placeholder={"Email address"}
                  autocomplete="email"
                  value={formData().email}
                  onInput={(e) => setFormData(prev => ({ ...prev, email: e.currentTarget.value }))}
                  class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  autocomplete="password"
                  value={formData().password}
                  onInput={(e) => setFormData(prev => ({ ...prev, password: e.currentTarget.value }))}
                  class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
                />
              </div>
              {error() && <div class="text-sm mt-2 text-red-500">{error()}</div>}
              <A href="/forgot" class="text-sm mt-2 self-end text-indigo-500">Forgot password?</A>
            </div>
            <div 
              class="flex flex-col items-center"
            >
              <button type="submit"
                onClick={signIn}
                disabled={!formData().email || !formData().password}
                class="flex items-center justify-center rounded-full text-white text-xl font-display bg-indigo-500 w-full my-4 py-3 disabled:bg-indigo-300 hover:bg-indigo-600 transition duration-300"
              >
                Log In
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