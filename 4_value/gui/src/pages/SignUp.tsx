import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseClientInit'

export default function SignIn() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('')
  const [errors, setErrors] = createSignal({
    email: '',
    password: '',
    confirmPassword: '',
    signUp: '',
  });
  
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email(), password())
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((err) => {
        setErrors(prev => ({ ...prev, signUp: err.code + err.message }));
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
                required
                placeholder={"Email address"}
                autocomplete="email"
                value={email()}
                onInput={(e) => {
                  setEmail(e.currentTarget.value);
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.currentTarget.value)) {
                    setErrors(prev => ({ ...prev, email: "Invalid email address" }));
                  } else {
                    setErrors(prev => ({ ...prev, email: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full mb-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
              />
              <input
                type="password"
                required
                placeholder="Password"
                autocomplete="password"
                value={password()}
                onInput={(e) => {
                  setPassword(e.currentTarget.value);
                  if (e.currentTarget.value.length < 8 ||
                    !/[A-Z]/.test(e.currentTarget.value) ||
                    !/[a-z]/.test(e.currentTarget.value) ||
                    !/[0-9]/.test(e.currentTarget.value) ||
                    !/[!@#$%^&*]/.test(e.currentTarget.value)) {
                    setErrors(prev => ({ ...prev, password: "Password must have min. 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special character" }));
                  } else {
                    setErrors(prev => ({ ...prev, password: "Password must have min. 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special character" }));
                  }

                  if (e.currentTarget.value !== password()) {
                    setErrors(prev => ({ ...prev, confirmPassword: "Password must have min. 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special character" }));
                  } else {
                    setErrors(prev => ({ ...prev, confirmPassword: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full mb-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
              />
              <input
                type="password"
                required
                placeholder="Confirm password"
                autocomplete="password"
                value={confirmPassword()}
                onInput={(e) => {
                  setConfirmPassword(e.currentTarget.value);
                  if (e.currentTarget.value !== password()) {
                    setErrors(prev => ({ ...prev, confirmPassword: "Password must have min. 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special character" }));
                  } else {
                    setErrors(prev => ({ ...prev, confirmPassword: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full mb-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
              />
            </div>
            {/* {error() && <div class="text-sm mt-2 text-red-500">{error()}</div>} */}
          </div>
          <div 
            class="flex flex-col items-center"
          >
            <button type="submit"
              onClick={signUp}
              // disabled={error() !== '' || !(email() !== '' && password() !== '' && confirmPassword() !== '')}
              class="
              flex items-center justify-center rounded-full text-white bg-indigo-500 shadow-[0_8px_28px_rgba(0,0,0,0.08)]
              w-full my-4 py-3 active:scale-95 disabled:bg-indigo-300 hover:bg-indigo-600 transition duration-300
              text-xl font-display
            "
            >
              Sign Up
            </button>
          </div>
          <div
              class="flex flex-col text-sm mt-8 items-center"
            >
              <p>
                Already a user? 
                <A href="/signin" class="text-indigo-500">
                  Sign in
                </A>
              </p>
            </div>
        </form>
      </div>
    </div>
  )
}