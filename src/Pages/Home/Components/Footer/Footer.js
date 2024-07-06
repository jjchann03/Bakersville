import './footer.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="footer-body">
            <div className="footer-grid-container">
                <div className="footer-details-container">
                    <div className="nav-brand" id='footer-brand'>
                        <div id="nav-brand-name">
                            <p id="bakersvilla">Bakersvilla</p>
                            <p id="academy">ACADEMY</p>
                        </div>
                        <hr/>
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" id="nav-logo"/>
                    </div>
                    <p id='footer-details-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='footer-email-container'>
                        <input type='email' placeholder='Email Address' className='email-bar'></input>
                        <button type='submit' className='submit-arrow-btn'><FaArrowRight /></button>
                    </div>
                    <div className='footer-icon-container'>
                        <FaSquareFacebook className='footer-icon'/>
                        <FaSquareTwitter className='footer-icon'/>
                        <FaSquareInstagram className='footer-icon'/>
                        <FaLinkedin className='footer-icon'/>
                        <FaYoutubeSquare className='footer-icon'/>
                    </div>
                </div>
                <div className="footer-menu">
                    <Link className="footer-link">Home</Link>
                    <Link className="footer-link">About Us</Link>
                    <Link className="footer-link">Courses</Link>
                    <Link className="footer-link">Gallery</Link>
                    <Link className="footer-link">Contact</Link>
                </div>
                <div className="footer-img-container">
                    <img src={`${process.env.PUBLIC_URL}/images/Home/footer.png`} alt='img'></img>
                </div>
            </div>
            <div className="footer-down-banner">
                <p>© Bakersvilla.com – All rights reserved | | Powered by Bakersvilla | Google Play and the Google Play logo are trademarks of Bakersvilla</p>
            </div>
        </div>
    );
}