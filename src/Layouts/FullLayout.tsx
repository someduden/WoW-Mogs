import type { ReactNode } from 'react';
import Header from './Header';

export default function FullLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <footer>
        <p>&copy; WoW-Mogs 2026</p>
      </footer>
    </div>
  );
}
