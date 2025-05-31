// src/cmp/NavBar.jsx
import { Link } from 'react-router-dom';
import { IconsSvg } from "./IconSvg";

export function NavBar() {
  return (
    <nav className="nav-bar-container">
      <ul className="nav-bar">
        <li>
          <Link to="/">
            <IconsSvg svgName={"home"} />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <IconsSvg svgName={"search"} />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <IconsSvg svgName={"add"} />
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <IconsSvg svgName={"bell"} />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <IconsSvg svgName={"user"} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
