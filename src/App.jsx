import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./cmp/NavBar";
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { AddPhoto } from './pages/AddPhoto';
import { Notification } from './pages/Notification';
import { ProfilePage } from './pages/ProfilePage';
import { AppHeader } from './cmp/AppHeader';

export function App() {
  return (
    <Router>
      <AppHeader />
      <NavBar />
      <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path='/add' element={<AddPhoto />} />
            <Route path='/notifications' element={<Notification />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </main>
    </Router>
  );
}