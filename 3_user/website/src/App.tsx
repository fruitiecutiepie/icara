import type { Component } from 'solid-js';
import { Link, useRoutes } from '@solidjs/router';

import { routes } from './routes';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <>
      <nav class="text-gray-900 mx-10 md:mx-28 mt-10">
        <ul class="flex items-center justify-end space-x-8">
          <li class="text-sm py-2 uppercase">
            <Link href="/" class="no-underline hover:underline">
              Home
            </Link>
          </li>
          <li class="text-sm py-2 uppercase">
            <Link href="/contact" class="no-underline hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <main
        class="pt-6 px-8 md:px-24 h-screen"
      >
        <Route />
      </main>
    </>
  );
};

export default App;
