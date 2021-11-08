import "./Header.css"

const Header = () => {
    return (
        <header className="Header container">
            <nav className="Header-nav">
                <img className="Header-logo" src={process.env.PUBLIC_URL + '/icon.png'} alt="maim logo"></img>
                <ul className="Header-ul">
                    <li><a className="Header-active" href="\#">Home</a></li>
                    <li><a href="\#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header