import type { Component } from 'solid-js';
import { Routes, Route, A, useLocation } from '@solidjs/router';

import logo from '../../../1_problem/assets/icon.svg'
import profile_picture from '../../../1_problem/assets/profile_picture.png'
import TabButton from './components/TabButton';

import Home from './pages/Home';
import Routine from './pages/Routine';
import Collection from './pages/Collection';
import Scan from './pages/Scan'
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Storage from './pages/Storage';
import Archive from './pages/Archive';
import Settings from './pages/Settings';

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
            class="flex space-x-14 md:flex-col md:justify-between md:pb-12 md:space-x-0"
          >
            <div
              class="flex justify-end select-none md:flex-col md:space-y-10 md:justify-start md:items-center md:w-16 lg:w-52"
            >
              <div class="pt-12 hidden w-full justify-center md:flex lg:justify-start">
                <A
                  href="/home"
                >
                  <img src={logo} class="w-7 h-7" alt="logo" />
                </A>
              </div>
              <nav
                class="flex space-x-14 items-center w-full
                md:flex-col md:space-y-10 md:space-x-0 md:justify-start lg:items-start lg:self-start"
              >
                <TabButton path="/home" icon="home" label="Home" noScroll />
                <TabButton path="/routine" icon="routine" label="Routine" noScroll />
                <div
                  class="flex-col hidden md:flex md:space-y-10 md:space-x-0 md:justify-start lg:items-start lg:self-start"
                >
                  <TabButton path="/items/storage" icon="home_storage" label="Storage" />
                  <TabButton path="/items/collection" icon="shelves" label="Collection" />
                  <TabButton path="/items/archive" icon="archive" label="Archive" />
                </div>
                <div
                  class="flex md:hidden"
                >
                  <TabButton path="/items/collection" icon="shelves" label="Items" />
                </div>
                <TabButton path="/notifications" icon="notifications" label="Notifications" noScroll />
                <A
                  href="/profile"
                  class="flex items-center justify-center lg:space-x-4 lg:justify-start w-full"
                >
                  <span
                    class="material-symbols-outlined self-center"
                  >
                    person
                  </span>
                  {/* TODO */}
                  {/* <img src={profile_picture} class="w-6 h-6 rounded-full" alt="profile_picture" /> */}
                  <span
                    class="text-xl font-display hidden lg:flex"
                  >
                    Profile
                  </span>
                </A>
                <A
                  href="/scan"
                  class="
                    hidden items-center justify-center rounded-full text-white bg-teal-400 shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                    md:flex md:w-12 md:h-12 lg:w-auto md:p-1 lg:py-3 lg:px-16 hover:bg-teal-500 transition duration-300
                  "
                  activeClass="material-symbols-filled"
                >
                  <span
                    class="material-symbols-outlined self-center lg:hidden
                    "
                  >
                    barcode_scanner
                  </span>
                  <span
                    class="text-xl font-display hidden lg:flex"
                  >
                    Scan
                  </span>
                </A>
              </nav>
            </div>
          </div>
        </div>
      )}
      <div
      class="self-center h-screen w-screen md:w-3/5 lg:w-1/2"
      >
        <div>
          <Routes>
            <Route path={["/", "/home"]} component={Home} />
            <Route path="/routine" component={Routine} />
            <Route path="/items/storage" component={Storage} />
            <Route path="/items/collection" component={Collection} />
            <Route path="/items/archive" component={Archive} />
            <Route path="/scan" component={Scan} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;