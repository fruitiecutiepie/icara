import logo from '../../assets/logo.svg'
import FeatureCard from '../components/FeatureCard';
import SignUpCard from '../components/SignUpCard';

export default function Home() {
  const scrollToSignUp = () => {
    document.getElementById('signup').scrollIntoView({ 
      behavior: 'smooth'
    });
  }

  return (
    <div
      class="snap-y snap-mandatory overflow-y-auto hide-scroll-bar h-screen scroll-smooth"
    >
      <div
        class="flex flex-col snap-end h-fit"
      >
        <div
          class="flex flex-col snap-start"
        >
          <h1 class="flex font-display my-2 text-6xl md:text-7xl">
            <img src={logo} alt="Logo"
              class="h-14 md:h-16 mr-3"
              />
            Icara
          </h1>
          <p
            class="text-lg md:text-3xl mb-10 -mt-2 font-light md:font-extralight"
          >
            Your beauty item management app.
          </p>
        </div>
        <div
          class="md:flex justify-between md:space-x-12 snap-both snap-mandatory scroll-smooth overflow-auto"
        >
          <FeatureCard
            header="Keep all your items in one place"
            text="From skincare to fragrance, we've got you covered."
            image="https://placehold.co/400x500/D4D4D4/EEEEEE.png" />
          <FeatureCard
            header="Customise your beauty routine"
            text="Skin cycling, hair cycling, you name it."
            image="https://placehold.co/400x500/D4D4D4/EEEEEE.png" />
          <FeatureCard
            header="Track your expired and finished items"
            text="Waste less products by being mindful."
            image="https://placehold.co/400x500/D4D4D4/EEEEEE.png" />
          <FeatureCard
            header="Grow your beauty collection"
            text="Storage | Collection | Archive | Wishlist"
            image="https://placehold.co/400x500/D4D4D4/EEEEEE.png" />
          <FeatureCard
            header="Analyse your spending and top items"
            text="Visualise how your behaviour evolves over time."
            image="https://placehold.co/400x500/D4D4D4/EEEEEE.png" />
        </div>
        <div
          class="flex justify-center my-7 w-full"
          onClick={scrollToSignUp}
        >
          <a
            class="material-symbols-outlined text-8xl transition duration-300"
          >
            expand_more
          </a>
        </div>
      </div>
      <div
        class="flex flex-col snap-end h-screen items-center justify-center"
        id="signup"
      >
        <div
          class="h-[50vh]"
        >
          <SignUpCard />
        </div>
      </div>
    </div>
  );
}
