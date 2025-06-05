import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { NavBar } from './NavBar';

export function Layout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <NavBar />
    </>
  );
}