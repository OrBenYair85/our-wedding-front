import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './cmp/Layout';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { AddPhoto } from './pages/AddPhoto';
import { Notification } from './pages/Notification';
import { ProfilePage } from './pages/ProfilePage';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Only apply this scroll hack on the /add route
    if (location.pathname === '/add') {
      setTimeout(() => {
        window.scrollTo(0, 1);
      }, 300);
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="add" element={<AddPhoto />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
