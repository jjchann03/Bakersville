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
        <div id="footer-body" className='grid grid-rows-8 grid-cols-7 w-full
        h-[13rem] phone:h-[15rem] sm:h-[17rem] lg:h-[22rem] 2xl:h-[25rem]'>
            <div id="footer-details-container" className='col-span-5 phone:col-span-3 row-span-7 px-6 pt-2'>
                <div className="flex" id='footer-brand'>
                    <div id="nav-brand-name">
                        <p id="bakersvilla">Bakersvilla</p>
                        <p id="academy">ACADEMY</p>
                    </div>
                    <hr/>
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" id="nav-logo"/>
                </div>

                <p id='footer-details-p' className='text-[0.6rem] phone:text-[0.65rem] sm:text-xs md:text-sm lg:text-base 2xl:text-lg
                w-full lg:w-9/12 
                text-start py-2 sm:py-4 xl:py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div id='footer-email-container' className='w-9/12 sm:w-10/12 lg:w-7/12 relative'>
                    <input type='email' placeholder='Email Address' className='w-full 
                    h-[1.4rem] sm:h-[1.8rem] md:h-[2.3rem] lg:h-[2.5rem] p-2 lg:px-4  border-[1px] border-slate-950 bg-transparent rounded-full
                    text-[0.6rem] phone:text-xs md:text-sm lg:text-base 2xl:text-lg'></input>
                    <button type='submit' className='absolute 
                    w-[1rem] sm:w-[1.4rem] md:w-[1.9rem] lg:w-[2.1rem] 
                    bg-red-900 aspect-square rounded-full text-white flex justify-center items-center box-border
                    top-[26%] right-[2%] sm:top-[12%] lg:top-[8%] lg:right-[2%]'><FaArrowRight className='text-[0.6rem] phone:text-xs md:text-sm lg:text-base 2xl:text-lg'/></button>
                </div>
                <div id='footer-icon-container' className='flex justify-start items-center mt-4 phone:mt-2 sm:mt-4 lg:mt-8 w-full'>
                    <FaSquareFacebook className='text-lg phone:text-base sm:text-lg lg:text-2xl mr-3 text-red-900'/>
                    <FaSquareTwitter className='text-lg lg:text-2xl mr-3 text-red-900'/>
                    <FaSquareInstagram className='text-lg lg:text-2xl mr-3 text-red-900'/>
                    <FaLinkedin className='text-lg lg:text-2xl mr-3 text-red-900'/>
                    <FaYoutubeSquare className='text-lg lg:text-2xl mr-3 text-red-900'/>
                </div>
            </div>

            <div id="footer-menu" className='col-span-2 phone:col-span-1 row-span-7 flex flex-col justify-center items-center'>
                <Link className="my-2 
                text-[0.6rem] phone:text-sm md:text-base 2xl:text-lg">Home</Link>
                <Link className="my-2 
                text-[0.6rem] phone:text-xs md:text-sm lg:text-base 2xl:text-lg">About Us</Link>
                <Link className="my-2
                text-[0.6rem] phone:text-xs md:text-sm lg:text-base 2xl:text-lg">Courses</Link>
                <Link className="my-2
                text-[0.6rem] phone:text-xs md:text-sm lg:text-base 2xl:text-lg">Gallery</Link>
                <Link className="my-2
                text-[0.6rem] phone:text-xs md:text-sm lg:text-base 2xl:text-lg">Contact</Link>
            </div>

            <div id="footer-img-container" className='hidden phone:block col-span-0 phone:col-span-3 row-span-7 overflow-hidden'>
                <img src={`${process.env.PUBLIC_URL}/images/Home/footer.png`} alt='img' className='w-full aspect-square'></img>
            </div>

            <div id="footer-down-banner" className='col-span-7 row-span-1 text-white flex items-center justify-center'>
                <p className='text-[0.5rem] phone:text-[0.6rem] md:text-xs lg:text-sm xl:text-base 2xl:text-lg'>© Bakersvilla.com – All rights reserved | | Powered by Bakersvilla | Google Play and the Google Play logo are trademarks of Bakersvilla</p>
            </div>
        </div>
    );
}