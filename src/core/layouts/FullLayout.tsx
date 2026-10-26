import type { ReactNode } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router';

export default function FullLayout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; WoW-Mogs 2026</p>
      </footer>
    </div>
  );
}
