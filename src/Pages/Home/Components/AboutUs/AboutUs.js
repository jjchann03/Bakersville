import './aboutus.css'
import { FaCirclePlay } from "react-icons/fa6";

export default function AboutUs(){
    return(
        <div className='aboutus-body'>
            <div className='aboutus-details-container'>
                <h3 className='section-heading'>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='aboutus-extra-container'>
                <div id='border-text'>Bakers<br/>Villa</div>
                <div className='aboutus-video-container'>
                    <FaCirclePlay id='aboutus-play'/>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/Home/aboutusBig.png`} id='aboutus-big-img' alt='img'></img>
                <img src={`${process.env.PUBLIC_URL}/images/Home/aboutusSmall.png`} id='aboutus-small-img' alt='img'></img>
            </div>
        </div>
    );
}