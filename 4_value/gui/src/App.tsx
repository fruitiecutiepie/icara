import type { Component } from 'solid-js';
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
import Tabs from './components/Tabs';

const App: Component = () => {
  const location = useLocation();
  return (
    <div
      class="flex flex-col md:flex-row justify-center h-screen"
    >
      <div
        class="sticky top-0 bottom-0 w-full order-2 md:order-1 md:w-auto lg:w-1/4"
      >
        {location.pathname !== '/scan' && (
          <Tabs />
        )}
      </div>
      <div
        class="self-center w-full overflow-y-auto order-1 md:order-2 md:mx-5 md:w-3/5 lg:w-1/2 md:border-l md:border-r"
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
      <div
        class="lg:w-1/4 lg:order-3"
      >
      </div>
    </div>
  );
};

export default App;