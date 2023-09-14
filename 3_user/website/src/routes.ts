import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/Home';

// TODO: Reevaluate if paths should be lazy loaded
export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contact',
    component: lazy(() => import('./pages/Contact')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
