import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './cmp/Layout';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { AddPhoto } from './pages/AddPhoto';
import { Notification } from './pages/Notification';
import { ProfilePage } from './pages/ProfilePage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="add" element={<AddPhoto />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
