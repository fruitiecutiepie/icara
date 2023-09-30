import { createSignal } from "solid-js";

export default function SignUpCard() {
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
      class="flex flex-col w-full pt-9 pb-10 md:px-10 items-center"
    >
      <form action="javascript:void(0)" method="post">
        <div class="flex flex-col text-lg items-center">
          <p>
            Sign up for <i class="underline">early access</i> here
          </p>
        </div>
        <div class="flex flex-col my-3 w-full">
          <div class="flex flex-col space-y-3 items-center">
            <input
              type="text"
              id="full_name"
              placeholder="Full Name (Optional)"
              autocomplete="name"
              class="capitalize w-full md:w-96 rounded-md py-2 px-4 text-sm border border-neutral-300"
            />
            <input
              type="email"
              id="email"
              required
              placeholder="Your Email Address"
              autocomplete="email"
              class="w-full md:w-96 rounded-md py-2 px-4 text-sm border border-neutral-300"
            />
          </div>
          {isRegistering() ? (
            <div class="text-sm mt-3">Registering...</div>
          ) :
            isRegistered() && (
            <div class="text-sm mt-3">You are successfully registered!</div>
          )}
        </div>
        <div class="flex flex-col items-center">
          <button type="submit" onClick={registerEmail}
            class="rounded-md mt-1 py-3 px-5 w-min text-white text-sm hover:bg-neutral-600 transition duration-300 bg-red-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}