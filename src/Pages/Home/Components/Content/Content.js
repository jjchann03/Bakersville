import './content.css'

export default function Content(){
    return(
        <div id="content-container" className='grid grid-cols-2 sm:grid-cols-4 w-full'>
            <div className='order-1 sm:order-1'>
                <img src={`${process.env.PUBLIC_URL}/images/Home/content1.png`} alt='img' className='w-full h-full'></img>
            </div>

            <div className='flex flex-col justify-center items-center order-2 sm:order-2'>
                <h4 className='text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl 
                font-medium 
                mb-1 sm:mb-2 lg:mb-4'>LOVE YOURSELF</h4>
                <p className='text-xs sm:sm md:text-xs lg:text-sm xl:text-base 
                w-9/12 
                mb-1 sm:mb-2 lg:mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='content-btn 
                w-5/12 
                h-[1.2rem] sm:h-[1.5rem] md:h-[1.25rem] lg:h-[1.5rem] xl:h-[1.75rem] 
                text-[0.5rem] md:text-[0.6rem] lg:text-xs 
                mt-1 sm:mt-1 md:mt-2 lg:mt-4 
                font-semibold'>SIGN UP</button>
            </div>

            <div className='order-4 sm:order-3'>
                <img src={`${process.env.PUBLIC_URL}/images/Home/content3.png`} alt='img' className='w-full h-full'></img>
            </div>

            <div className='flex flex-col justify-center items-center order-3 sm:order-4'>
                <h4 className='text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl 
                font-medium 
                mb-1 sm:mb-2 lg:mb-4'>ENROLL COURSES</h4>
                <p className='text-xs sm:sm md:text-xs lg:text-sm xl:text-base 
                w-9/12 
                mb-1 sm:mb-2 lg:mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='content-btn 
                w-5/12 
                h-[1.2rem] sm:h-[1.5rem] md:h-[1.25rem] lg:h-[1.5rem] xl:h-[1.75rem] 
                text-[0.5rem] md:text-[0.6rem] lg:text-xs 
                mt-1 sm:mt-1 md:mt-2 lg:mt-4 
                font-semibold'>READ MORE</button>
            </div>

            <div className='flex flex-col justify-center items-center order-6 sm:order-5'>
                <h4 className='text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl 
                font-medium 
                mb-0 sm:mb-2 lg:mb-4'>SATISFY YOUR CRAVINGS</h4>
                <p className='text-xs sm:sm md:text-xs lg:text-sm xl:text-base 
                w-9/12 
                mb-1 sm:mb-2 lg:mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                <button className='content-btn 
                w-5/12 
                h-[1.2rem] sm:h-[1.5rem] md:h-[1.25rem] lg:h-[1.5rem] xl:h-[1.75rem] 
                text-[0.5rem] md:text-[0.6rem] lg:text-xs 
                mt-1 sm:mt-1 md:mt-2 lg:mt-4 
                font-semibold'>GRAB NOW</button>
            </div>

            <div className='order-5 sm:order-6'>
                <img src={`${process.env.PUBLIC_URL}/images/Home/content2.png`} alt='img' className='w-full h-full'></img>
            </div>

            <div className='flex flex-col justify-center items-center order-7 sm:order-7'>
                <h4 className='text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl 
                font-medium 
                mb-1 sm:mb-2 lg:mb-4'>MADE WITH LOVE</h4>
                <p className='text-xs sm:sm md:text-xs lg:text-sm xl:text-base 
                w-9/12 
                mb-1 sm:mb-2 lg:mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='content-btn 
                w-5/12 
                h-[1.2rem] sm:h-[1.5rem] md:h-[1.25rem] lg:h-[1.5rem] xl:h-[1.75rem] 
                text-[0.5rem] md:text-[0.6rem] lg:text-xs 
                mt-1 sm:mt-1 md:mt-2 lg:mt-4 
                font-semibold'>ABOUT US</button>
            </div>

            <div className='order-8 sm:order-8'>
                <img src={`${process.env.PUBLIC_URL}/images/Home/content4.png`} alt='img' className='w-full h-full'></img>
            </div>
        </div>
    )
}