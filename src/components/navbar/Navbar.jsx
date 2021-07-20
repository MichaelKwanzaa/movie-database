import {Link} from "react-router-dom"
import "./navbar.css"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <div className="navbarTitle">
                    <h1 className="navbarLogo">.TMDB Frontend</h1>
                </div>
                <div className="navbarLinks">
                    <ul>
                        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                            <li className="navbarLink">Home</li>
                        </Link>
                        <Link to="/contact" style={{textDecoration: "none", color: "inherit"}}>
                            <li className="navbarLink">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
