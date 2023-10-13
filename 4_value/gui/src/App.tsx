import { createSignal, type Component, onCleanup, Show } from 'solid-js';
import { Routes, Route, useLocation } from '@solidjs/router';

import Home from './pages/Home';
import Routine from './pages/Routine';
import Collection from './pages/Collection';
import Scan from './pages/Scan'
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Storage from './pages/Storage';
import Archive from './pages/Archive';
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Tabs from './components/Tabs';
import TabHeading from './components/TabHeading';


const App: Component = () => {
  const location = useLocation();
  const isSmScreen = window.innerWidth < 768;
  const fullScreenRoutes = ['/scan', '/signin', '/signup', '/forgot']
  
  const routeConfig = {
    '/': { heading: 'Home' },
    '/home': { heading: 'Home' },
    '/routine': {
      heading: 'Routine',
      icon_path: isSmScreen ?
        [{ icon: "settings", path: "/settings/routine" }] :
        [{ icon: "settings", path: "/settings/routine" }, { icon: "shadow_add", path: "/routine/add" }]
    },
    '/storage': {
      heading: 'Storage',
      goBack: true,
    },
    '/collection': {
      heading: 'Collection',
      icon_path: isSmScreen ?
      [{ icon: "archive", path: "/archive" }, { icon: "home_storage", path: "/storage" }] :
      [{ icon: "shadow_add", path: "/items/add" }]
    },
    '/archive': {
      heading: 'Archive',
      goBack: true,
    },
    '/scan': {
      heading: 'Scan',
      goBack: true,
    },
    '/notifications': {
      heading: 'Notifications',
      icon_path: [{ icon: "settings", path: "/settings/notifications" }],
    },
    '/profile': {
      heading: 'Profile',
      icon_path: [{ icon: "settings", path: "/settings" }],
    },
    '/settings': {
      heading: 'Settings',
      goBack: true,
    },
    '/forgot': {
      goBack: true,
    },
  }
  
  // const [lastScrollTop, setLastScrollTop] = createSignal(0);
  // Set isVisible to true to show the header on page load
  const [isVisible, setIsVisible] = createSignal(false);

  let scrollableDiv: HTMLDivElement;

  const handleScroll = () => {
    // if (window.innerWidth < 768) {
    // const st = window.scrollY || document.documentElement.scrollTop;
    const st = scrollableDiv.scrollTop;
    // Set st < lastScrollTop() to show the header when scrolling up and hide it when scrolling down
      if (st > 42) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      // setLastScrollTop(st <= 0 ? 0 : st);
    // }
  }

  window.addEventListener('scroll', handleScroll);

  onCleanup(() => {
    scrollableDiv.removeEventListener('scroll', handleScroll);
  })
  
  return (
    <div
      class="flex flex-col md:flex-row justify-between md:justify-center h-screen"
    >
      <div
        class="order-1 md:order-2 flex flex-col w-full overflow-y-hidden md:w-2/3 lg:w-1/2 md:mx-5 md:border-l md:border-r"
      >
        <TabHeading {...routeConfig[location.pathname]} isVisible={isVisible()} />
        <div
          class="self-center overflow-y-auto w-full h-screen"
          ref={el => {
            scrollableDiv = el; 
            el.addEventListener('scroll', handleScroll);
          }}
        >
          <Routes>
            <Route path={["/", "/home"]} component={Home} />
            <Route path="/routine" component={Routine} />
            <Route path="/storage" component={Storage} />
            <Route path="/collection" component={Collection} />
            <Route path="/archive" component={Archive} />
            <Route path="/scan" component={Scan} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot" component={ForgotPassword} />
          </Routes>
        </div>
      </div>
      <div
        class="sticky top-0 bottom-0 w-full order-2 lg:px-5 md:order-1 md:w-auto lg:w-1/4"
      >
        <Show when={!fullScreenRoutes.includes(location.pathname)}>
          <Tabs />
        </Show>
      </div>
      <div
        class="lg:w-1/4 lg:order-3"
      >
      </div>
    </div>
  );
};

export default App;