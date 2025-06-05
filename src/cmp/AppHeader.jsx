import { IconsSvg } from "./IconSvg"

export function AppHeader() {
    return (
        <div className="app-header-container">
            <IconsSvg svgName={'ring'} />
                <h1>Our Wedding</h1>
            <IconsSvg svgName={'ring'} />
        </div>
    )
}