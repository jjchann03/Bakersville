import './aboutus.css'
import { FaCirclePlay } from "react-icons/fa6";

export default function AboutUs(){
    return(
        <div className='aboutus-body w-full h-fit flex flex-col justify-center items-center'>
            <div className='w-5/12 lg:w-4/12 
            mt-4 sm:mt-8 md:mt-10 lg:mt-12'>
                <h3 className='text-lg sm:text-2xl lg:text-3xl 
                font-semibold'>About Us</h3>
                <p className='text-[0.6rem] sm:text-[0.7rem] md:text-sm lg:text-base 
                mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='w-full relative 
            h-[11rem] phone:h-[15rem] sm:h-[22rem] md:h-[28rem] lg:h-[35rem] xl:h-[42rem] 2xl:h-[50rem]'>
                <div id='border-text' className='absolute z-10
                top-0 lg:top-[5%] right-[22%] sm:right-[15%] md:right-[18%] lg:right-[20%] xl:right-[23%]
                text-2xl sm:text-5xl lg:text-6xl xl:text-7xl
                tracking-[8px] sm:tracking-[15px] lg:tracking-[18px] 
                leading-[2rem] phone:leading-[2.5rem] sm:leading-[4rem] md:leading-[4.5rem] lg:leading-[5rem]'>Bakers<br/>Villa</div>
                <div id='aboutus-video-container' className='box-content aspect-square z-[5] absolute
                w-[16%] phone:w-[18%]  
                top-[16%] phone:top-[18%] sm:top-[10%] left-[36%] overflow-hidden'>
                    <div className='w-full h-full flex justify-center items-center play-video transition ease 0.5s'>
                        <FaCirclePlay id='aboutus-play' className='md:text-4xl lg:text-5xl'/>
                    </div>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/Home/aboutusBig.png`} id='aboutus-big-img' className='absolute aspect-square 
                w-[20%] phone:w-[22%] sm:w-[25%] lg:w-3/12 2xl:w-[23%]
                top-[38%] sm:top-[38%] left-2/4' alt='img'></img>
                <img src={`${process.env.PUBLIC_URL}/images/Home/aboutusSmall.png`} id='aboutus-small-img' alt='img' className='absolute 
                w-[10%] phone:w-[12%] 
                top-[46%] phone:top-[40%] lg:top-[42%] xl:top-[42%] left-[27%] phone:left-1/4'></img>
            </div>
        </div>
    );
}