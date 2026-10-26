import { useRoutes } from 'react-router';
import { HomeRoutes } from './features/home/routes';

export const appRoutes = [...HomeRoutes];

export const AppRouter = () => {
  const element = useRoutes(appRoutes);
  return element;
};
