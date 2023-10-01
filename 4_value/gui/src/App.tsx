import type { Component } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import Home from './pages/Home';
import Routine from './pages/Routine';
import New from './pages/New';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';

const App: Component = () => {
  return (
    <>
      <nav class="flex w-full h-14 fixed bottom-0 space-x-12 bg-white justify-center">
        <A
          href="/"
          class="material-symbols-outlined self-center"
          activeClass="material-symbols-filled"
          noScroll
        >
          home
        </A>
        <A 
          href="/routine" 
          class="material-symbols-outlined self-center" 
          activeClass="material-symbols-filled"
          noScroll
        >
          routine
        </A>
        <A 
          href="/new" 
          class="material-symbols-outlined self-center" 
          activeClass="material-symbols-filled"
        >
          add_circle
        </A>
        <A 
          href="/analytics" 
          class="material-symbols-outlined self-center" 
          activeClass="material-symbols-filled"
          noScroll
        >
          analytics
        </A>
        <A 
          href="/profile" 
          class="material-symbols-outlined self-center" 
          activeClass="material-symbols-filled"
          noScroll
        >
          person
        </A>
      </nav>
      <div class="m-5 my-10 mt-20">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/routine" component={Routine} />
          <Route path="/new" component={New} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/profile" component={Profile} />
        </Routes>
      </div>
    </>
  );
};

export default App;