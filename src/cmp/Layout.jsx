import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { NavBar } from './NavBar';

export function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === '/add';

  return (
    <>
      {!hideLayout && <AppHeader />}
      <main>
        <Outlet />
      </main>
      {!hideLayout && <NavBar />}
    </>
  );
}
