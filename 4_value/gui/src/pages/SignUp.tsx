import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseClientInit'

export default function SignUp() {
  const [formData, setFormData] = createSignal({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = createSignal({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signUpError, setSignUpError] = createSignal('');

  const hasErrors = () => {
    return (!!errors().email || !!errors().password || !!errors().confirmPassword) ||
      (!formData().email || !formData().password || !formData().confirmPassword);
  }
  
  const signUp = () => {
    createUserWithEmailAndPassword(auth, formData().email, formData().password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((err) => {
        setSignUpError(err.code + err.message);
      });
  }

  return (
    <div
      class="flex flex-col pt-5 px-5"
    >
      <h1
        class="font-display font-bold text-4xl text-center mb-4"
      >
        Register
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
                onInput={(e) => {
                  setFormData(prev => ({ ...prev, email: e.currentTarget.value }))
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.currentTarget.value)) {
                    setErrors(prev => ({ ...prev, email: "Invalid email address" }));
                  } else {
                    setErrors(prev => ({ ...prev, email: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
                />
              {errors().email && <div class="text-sm mb-2 self-start text-red-500">{errors().email}</div>}
              <input
                type="password"
                required
                placeholder="Password"
                autocomplete="password"
                value={formData().password}
                onInput={(e) => {
                  setFormData(prev => ({ ...prev, password: e.currentTarget.value }))
                  if (e.currentTarget.value.length < 8 ||
                    !/[A-Z]/.test(e.currentTarget.value) ||
                    !/[a-z]/.test(e.currentTarget.value) ||
                    !/[0-9]/.test(e.currentTarget.value) ||
                    !/[!@#$%^&*]/.test(e.currentTarget.value)) {
                    setErrors(prev => ({ ...prev, password: "Password must have min. 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special character" }));
                  } else {
                    setErrors(prev => ({ ...prev, password: "" }));
                  }

                  if (formData().password !== formData().confirmPassword) {
                    setErrors(prev => ({ ...prev, confirmPassword: "Passwords must match" }));
                  } else {
                    setErrors(prev => ({ ...prev, confirmPassword: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
              />
              {errors().password && <div class="text-sm mb-2 self-start text-red-500">{errors().password}</div>}
              <input
                type="password"
                required
                placeholder="Confirm password"
                autocomplete="password"
                value={formData().confirmPassword}
                onInput={(e) => {
                  setFormData(prev => ({ ...prev, confirmPassword: e.currentTarget.value }))
                  if (formData().password !== formData().confirmPassword) {
                    setErrors(prev => ({ ...prev, confirmPassword: "Passwords must match" }));
                  } else {
                    setErrors(prev => ({ ...prev, confirmPassword: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
              />
              {errors().confirmPassword && <div class="text-sm mb-2 self-start text-red-500">{errors().confirmPassword}</div>}
            </div>
          </div>
          <div 
            class="flex flex-col items-center"
          >
            <button type="submit"
              onClick={signUp}
              disabled={hasErrors()}
              class="flex items-center justify-center rounded-full text-white text-xl font-display bg-indigo-500 w-full my-4 py-3 disabled:bg-indigo-300 hover:bg-indigo-600 transition duration-300"
            >
              Sign Up
            </button>
          {signUpError() && <div class="text-sm text-red-500 self-center">{signUpError()}</div>}
          </div>
          <div
            class="flex flex-col text-sm mt-8 items-center"
          >
            <p>
              Already a user? 
              <A href="/signin" class="text-indigo-500">
                Log in
              </A>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}