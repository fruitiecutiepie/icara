import { A } from '@solidjs/router';
import logo from '../../../../1_problem/assets/icon.svg';
import profile_picture from '../../../../1_problem/assets/profile_picture.png';
import TabButton from './TabButton';

export default function Tabs() {
  return (
    <div
      // class="flex w-full min-h-[3.5rem] bg-zinc-50 bottom-0 border-t
      //   md:border-t-0 md:border-r lg:border-r-0 md:justify-end md:top-0 md:bottom-auto md:overflow-y-auto md:h-full md:w-auto lg:w-1/4"
        class="sticky top-0 bottom-0 pb-safe bg-zinc-50 border-t md:border-t-0"
    >
      <div
        class="flex w-full justify-center items-end md:flex-col md:justify-between md:pb-12"
      >
        <div
          class="flex justify-end items-center select-none md:flex-col md:justify-start md:items-center"
        >
          <div class="pt-3 hidden w-full md:flex lg:justify-start">
            <A
              class="
              flex items-center justify-center w-full py-3 px-5 my-1 mx-1 
              md:mx-0 md:px-3 lg:px-5 lg:space-x-4 lg:justify-start
              "
              href="/home"
            >
              <img src={logo} class="w-7 h-7" alt="logo" />
            </A>
          </div>
          <nav
            class="flex items-center justify-center w-full md:flex-col lg:items-start"
          >
            <TabButton path="/home" icon="home" label="Home" />
            <TabButton path="/routine" icon="routine" label="Routine" />
            <div
              class="flex-col hidden w-full md:flex md:justify-start lg:items-start lg:self-start"
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
            <TabButton path="/notifications" icon="notifications" label="Notifications" />
            <A
              href="/profile"
              class="
              flex items-center justify-center w-full py-3 px-5 my-1 mx-1 
              md:mx-0 md:px-3 lg:px-5 lg:space-x-4 lg:justify-start 
              hover:scale-105 active:scale-95 lg:hover:scale-100 md:hover:bg-indigo-600 md:hover:bg-opacity-5 rounded-xl
              "
              activeClass="material-symbols-filled"
            >
              {/* <span
                class="material-symbols-outlined self-center"
              >
                person
              </span> */}
              {/* TODO */}
              <img src={profile_picture} class="w-6 h-6 rounded-full" alt="profile_picture" />
              <span
                class="text-xl font-display hidden lg:flex"
              >
                Profile
              </span>
            </A>
            <A
              href="/scan"
              class="
                hidden items-center justify-center self-center rounded-full text-white bg-indigo-500 shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                md:flex md:w-12 md:h-12 lg:w-auto md:p-1 md:my-4 lg:py-3 lg:px-16 hover:scale-105 active:scale-95 lg:hover:scale-100 hover:bg-indigo-600 transition duration-300
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
  )
}