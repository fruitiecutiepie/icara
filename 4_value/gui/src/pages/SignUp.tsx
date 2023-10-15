import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../common/firebaseClientInit'
import logo from '../../assets/logo.svg'

export default function SignUp() {
  const [formData, setFormData] = createSignal({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = createSignal({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = createSignal('');

  const hasFormErrors = () => {
    return (!!formErrors().email || !!formErrors().password || !!formErrors().confirmPassword) ||
      (!formData().email || !formData().password || !formData().confirmPassword);
  }
  
  const signUp = () => {
    createUserWithEmailAndPassword(auth, formData().email, formData().password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        if (err.code === 'auth/email-already-in-use') {
          setError("Account already exists. Please log in.")
        } else {
          setError("An error occurred. Please try again.")
        }
      });
  }

  return (
    <div
      class="flex flex-col pt-5 px-5 pb-safe"
    >
      <img src={logo} alt="Logo"
          class="h-24 pb-5"
        />
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
                    setFormErrors(prev => ({ ...prev, email: "Invalid email address" }));
                  } else {
                    setFormErrors(prev => ({ ...prev, email: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
                />
              {formErrors().email && <div class="text-sm mb-2 self-start text-red-500">{formErrors().email}</div>}
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
                    setFormErrors(prev => ({ ...prev, password: "Password must have min. 8 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special character" }));
                  } else {
                    setFormErrors(prev => ({ ...prev, password: "" }));
                  }

                  if (formData().password !== formData().confirmPassword) {
                    setFormErrors(prev => ({ ...prev, confirmPassword: "Passwords must match" }));
                  } else {
                    setFormErrors(prev => ({ ...prev, confirmPassword: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
              />
              {formErrors().password && <div class="text-sm mb-2 self-start text-red-500">{formErrors().password}</div>}
              <input
                type="password"
                required
                placeholder="Confirm password"
                autocomplete="password"
                value={formData().confirmPassword}
                onInput={(e) => {
                  setFormData(prev => ({ ...prev, confirmPassword: e.currentTarget.value }))
                  if (formData().password !== formData().confirmPassword) {
                    setFormErrors(prev => ({ ...prev, confirmPassword: "Passwords must match" }));
                  } else {
                    setFormErrors(prev => ({ ...prev, confirmPassword: "" }));
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
              />
              {formErrors().confirmPassword && <div class="text-sm mb-2 self-start text-red-500">{formErrors().confirmPassword}</div>}
            </div>
            {error() && <div class="text-sm mt-2 text-red-500">{error()}</div>}
          </div>
          <div 
            class="flex flex-col items-center"
          >
            <button type="submit"
              onClick={signUp}
              disabled={hasFormErrors()}
              class="flex items-center justify-center rounded-full text-white text-xl font-display bg-indigo-500 w-full my-4 py-3 disabled:bg-indigo-300 hover:bg-indigo-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <div
              class="flex flex-col w-full min-h-[3.5rem] justify-center text-sm mt-8 items-center"
            >
              <p
                class="w-full text-center"
              >
                Already a user? 
                <A href="/login"
                  class="text-indigo-500"
                >
                  Log in
                </A>
              </p>
            </div>
        </form>
      </div>
    </div>
  )
}