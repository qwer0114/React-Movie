import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className="logo">Watcher</div>
            <ul className="nav-lists">
                <div className="home"><Link to="/">HOME</Link></div>
                <div className="netflix"><Link to="/netflix">Netflix</Link></div>
                <div className="diseny"><Link to="/disney">Disney+</Link>+</div>

            </ul>
        </div>
    )
}

export default Navbar;