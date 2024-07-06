import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar(){
    return(
        <div className="nav-body">
            <div className="nav-brand">
                <div id="nav-brand-name">
                    <p id="bakersvilla">Bakersvilla</p>
                    <p id="academy">ACADEMY</p>
                </div>
                <hr/>
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" id="nav-logo"/>
            </div>

            <div className="nav-link-container">
                <Link className="nav-link">Home</Link>
                <Link className="nav-link">About Us</Link>
                <Link className="nav-link">Courses</Link>
                <Link className="nav-link">Gallery</Link>
                <Link className="nav-link">Contact</Link>
            </div>

            
        </div>
    );
}