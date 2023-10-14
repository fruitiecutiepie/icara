import { createSignal } from "solid-js";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../common/firebaseClientInit'

export default function SignIn() {
  const [email, setEmail] = createSignal('');
  const [error, setError] = createSignal('');
  const [result, setResult] = createSignal('');
  
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email())
      .then(() => {
        setResult("Password reset email sent!")
      })
      .catch((err) => {
        setResult(err.code + err.message)
      });
  }

  return (
    <div
      class="flex flex-col pt-5 px-5"
    >
      <h1
        class="font-display font-bold text-xl text-center mb-2"
      >
        Reset Password
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
                value={email()}
                onInput={(e) => {
                  setEmail(e.currentTarget.value);
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.currentTarget.value)) {
                    setError("Invalid email address");
                  } else {
                    setError("");
                  }
                }}
                class="border-x-0 border-t-0 border-b bg-transparent w-full my-2 py-2 px-4 focus:ring-0 focus:outline-none focus:border-indigo-500 autofill:bg-transparent"
              />
            </div>
            {error() && <div class="text-sm mb-2 text-red-500">{error()}</div>}
          </div>
          <div 
            class="flex flex-col items-center"
            >
            <button type="submit"
              onClick={resetPassword}
              disabled={!email() || !!error()}
              class="flex items-center justify-center rounded-full text-white font-display bg-indigo-500 w-full my-4 py-3 disabled:bg-indigo-300 hover:bg-indigo-600 transition duration-300"
              >
              Send password reset link
            </button>
            {result() && <div class="text-sm text-green-500 self-center">{result()}</div>}
          </div>
        </form>
      </div>
    </div>
  )
}