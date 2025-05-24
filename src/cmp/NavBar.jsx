import { IconsSvg } from "./IconSvg"

export function NavBar() {

    return (
        <nav className="nav-bar-container">
            <ul className="nav-bar">
                <li><a href="#">
                    <IconsSvg svgName={"home"} />
                </a></li>
                <li><a href="#">
                    <IconsSvg svgName={"search"} />    
                </a></li>
                <li><a href="#">
                    <IconsSvg svgName={"add"} />
                </a></li>
                <li><a href="#">
                    <IconsSvg svgName={"bell"} />
                </a></li>
                <li><a href="#">
                    <IconsSvg svgName={"user"} />
                </a></li>
            </ul>
        </nav>
    )
}