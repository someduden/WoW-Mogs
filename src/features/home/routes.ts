import type { RouteObject } from 'react-router';
import FullLayout from '../../core/layouts/FullLayout';
import HomePage from './HomePage';

export const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    Component: FullLayout,
    children: [
      {
        path: '',
        Component: HomePage,
      },
    ],
  },
];
