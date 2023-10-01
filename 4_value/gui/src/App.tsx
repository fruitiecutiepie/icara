import type { Component } from 'solid-js';
import { Routes, Route, A, useLocation } from '@solidjs/router';

import logo from '../../../1_problem/assets/icon.svg'
import TabButton from './components/TabButton';

import Home from './pages/Home';
import Routine from './pages/Routine';
import New from './pages/New';
import Scan from './pages/Scan'
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';

const App: Component = () => {
  const location = useLocation();
  return (
    <div
      class="flex flex-col"
    >
      {location.pathname !== '/scan' && (
        <div
          class="flex w-full h-14 fixed bottom-0 justify-center z-20 border-t
            md:border-t-0 md:justify-end md:border-r md:top-0 md:bottom-auto md:overflow-y-auto md:h-full md:w-auto lg:w-1/4"
        >
          <div
            class="flex justify-end md:flex-col md:space-y-12 md:justify-start md:items-center md:w-16 lg:w-52"
          >
            <div class="mt-12 hidden w-full justify-center md:flex lg:justify-start">
              <A
                href="/home"
              >
                <img src={logo} class="w-7 h-7" alt="logo" />
              </A>
            </div>
            <nav
              class="flex space-x-12 items-center w-full
              md:flex-col md:space-y-12 md:space-x-0 md:justify-start lg:items-start lg:self-start"
            >
              <TabButton path="/home" icon="home" label="Home" noScroll />
              <TabButton path="/routine" icon="routine" label="Routine" noScroll />
              <TabButton path="/new" icon="add_circle" label="Add" />
              <TabButton path="/analytics" icon="analytics" label="Analytics" noScroll />
              <TabButton path="/profile" icon="person" label="Profile" />
            </nav>
          </div>
        </div>
      )}
      <div
        class="self-center h-screen w-screen md:w-1/2"
      >
        <div>
          <Routes>
            <Route path={["/", "/home"]} component={Home} />
            <Route path="/routine" component={Routine} />
            <Route path="/new" component={New} />
            <Route path="/scan" component={Scan} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/profile" component={Profile} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;