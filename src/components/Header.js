import { Link } from "react-router-dom"
import  React, { useState } from "react";
import "./Header.css"

const Header = () => {

    // set an initial state for active link
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <header className="Header">
            <nav className="Header-nav container">
                <img className="Header-logo" src={process.env.PUBLIC_URL + '/icon.png'} alt="maim logo"></img>
                <ul className="Header-ul">
                    <li><Link onClick={handleClick} className={isActive === false ? "Header-active" : ""} to="/movie-web-app">Home</Link></li>
                    <li><Link onClick={handleClick} className={isActive === true ? "Header-active" : ""} to="/movie-web-app/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
