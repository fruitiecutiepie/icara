import { A } from "@solidjs/router";
import PageHeading from "../components/PageHeading";
import TabHeading from "../components/TabHeading";
import { createEffect, createSignal } from "solid-js";

export default function SignIn() {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [isRegistered, setIsRegistered] = createSignal(false);
  const [isRegistering, setIsRegistering] = createSignal(false);

  const registerEmail = async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const fullNameInput = document.getElementById('full_name') as HTMLInputElement;
    const email = emailInput.value.trim().toLowerCase();
    const full_name = fullNameInput.value;
    if (!isRegistered()) {
      setIsRegistering(true);

      try {
        const res = await fetch('https://us-central1-icara-app.cloudfunctions.net/addEmailToSheets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, full_name })
        });
        setIsRegistering(false);
        setIsRegistered(true);
        console.log(res.text());
      } catch (err) {
        console.error(err);
      }
    }
  }

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
            <div class="flex flex-col my-3 w-full">
              <div class="flex flex-col items-center">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder={"Email Address"}
                  autocomplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="border-x-0 border-t-0 border-b bg-transparent w-full my-3 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
                />
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="Password"
                  autocomplete="password"
                  onChange={(e) => setPassword(e.target.value)}
                  class="border-x-0 border-t-0 border-b bg-transparent w-full my-3 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <A href="/forgot" class="text-sm mt-3 self-end text-indigo-500">Forgot password?</A>
            </div>
            <div 
              class="flex flex-col items-center"
            >
              <button type="submit" onClick={registerEmail}
                class="
                flex items-center justify-center rounded-full text-white bg-indigo-500 shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                w-48 h-12 lg:w-full md:p-1 md:my-4 lg:py-3 lg:px-16 hover:scale-105 active:scale-95 lg:hover:scale-100 hover:bg-indigo-600 transition duration-300
                text-xl font-display
              "
              >
                Login
              </button>
            </div>
            <div
              class="flex flex-col"
            >
              <p
                class="text-sm mt-3 self-center"
              >Not a user yet? <A href="/signup" class="text-indigo-500">Create an account</A>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}