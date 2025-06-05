// src/cmp/NavBar.jsx
import { Link, useLocation } from 'react-router-dom';
import { IconsSvg } from "./IconSvg";

export function NavBar() {

  const location = useLocation()

const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav-bar-container">
      <ul className="nav-bar">
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            <IconsSvg svgName={"home"} />
          </Link>
        </li>
        <li>
          <Link to="/search" className={isActive("/search") ? "active" : ""}>
            <IconsSvg svgName={"search"} />
          </Link>
        </li>
        <li className="add-button-wrapper">
          <Link to="/add" className={'add-button'}>
            <IconsSvg svgName={"add"} />
          </Link>
        </li>
        <li>
          <Link to="/notifications" className={isActive("/notifications") ? "active" : ""}>
            <IconsSvg svgName={"bell"} />
          </Link>
        </li>
        <li>
          <Link to="/profile" className={isActive("/profile") ? "active" : ""}>
            <IconsSvg svgName={"user"} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
