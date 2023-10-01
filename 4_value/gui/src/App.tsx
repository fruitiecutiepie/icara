import type { Component } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';

import logo from '../../../1_problem/assets/icon.svg'
import Home from './pages/Home';
import Routine from './pages/Routine';
import New from './pages/New';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';

const App: Component = () => {
  return (
    <div>
      <div
        class="flex w-full h-14 fixed bottom-0 justify-center z-20 border-t
          md:border-t-0 md:justify-end md:border-r md:top-0 md:bottom-auto md:overflow-y-auto md:h-full md:w-auto lg:w-1/4"
      >
        <div
          class="flex justify-end md:flex-col md:space-y-12 md:justify-start md:items-center md:w-16 lg:w-52"
        >
          <div class="mt-12 hidden md:flex lg:self-start">
            <A
              href="/home"
            >
              <img src={logo} class="w-7 h-7" alt="logo" />
            </A>
          </div>
          <nav
            class="flex space-x-12 items-center
            md:flex-col md:space-y-12 md:space-x-0 md:justify-start lg:items-start lg:self-start"
          >
            <A
              href="/home"
              class="flex items-center justify-center lg:space-x-2 lg:justify-start lg:w-full"
              activeClass="material-symbols-filled"
              noScroll
            >
              <span
                class="material-symbols-outlined self-center"
              >
                home

              </span>
              <span
                class="text-xl hidden lg:flex"
              >
                Home
              </span>
            </A>
            <A
              href="/routine"
              class="flex items-center justify-center lg:space-x-2 lg:justify-start lg:w-full"
              activeClass="material-symbols-filled"
              noScroll
            >
              <span
                class="material-symbols-outlined self-center"
              >
                routine

              </span>
              <span
                class="text-xl hidden lg:flex"
              >
                Routine
              </span>
            </A>
            <A
              href="/new"
              class="flex items-center justify-center lg:space-x-2 lg:justify-start lg:w-full"
              activeClass="material-symbols-filled"
            >
              <span
                class="material-symbols-outlined self-center"
              >
                add_circle

              </span>
              <span
                class="text-xl hidden lg:flex"
              >
                Add
              </span>
            </A>
            <A
              href="/analytics"
              class="flex items-center justify-center lg:space-x-2 lg:justify-start lg:w-full"
              activeClass="material-symbols-filled"
              noScroll
            >
              <span
                class="material-symbols-outlined self-center"
              >
                analytics

              </span>
              <span
                class="text-xl hidden lg:flex"
              >
                Analytics
              </span>
            </A>
            <A
              href="/profile"
              class="flex items-center justify-center lg:space-x-2 lg:justify-start lg:w-full"
              activeClass="material-symbols-filled"
            >
              <span
                class="material-symbols-outlined self-center"
              >
                person

              </span>
              <span
                class="text-xl hidden lg:flex"
              >
                Profile
              </span>
            </A>
          </nav>
        </div>
      </div>
      <div
        class="md:left-20 lg:left-1/4 relative h-screen w-screen"
      >
        <div>
          <Routes>
            <Route path="/home" component={Home} />
            <Route path="/routine" component={Routine} />
            <Route path="/new" component={New} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/profile" component={Profile} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;