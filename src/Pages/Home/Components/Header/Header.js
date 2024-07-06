import './header.css'

export default function Header(){
    return(
        <div id='home-header-body' className="w-full h-auto flex flex-col justify-center items-center">
                <h2 className='w-11/12 sm:w-10/12 md:w-6/12 lg:w-5/12 xl:w-6/12
                text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                mt-16 md:mt-20 lg:mt-24 xl:mt-28 mb-4
                font-semibold text-white'>Welcome to the <br/> Bakers Villa</h2>
                <p className='w-8/12 sm:w-7/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                text-[0.7rem] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:2xl;
                my-0.5 sm:my-1 md:my-2 lg:my-4 2xl:my-8
                text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div id="header-btn-container" className='mb-16 md:mt-20 lg:mb-24 xl:mb-28 mt-2 mt-4 md:mt-8
                w-7/12 sm:w-6/12 lg:w-5/12 xl:w-4/12
                flex justify-around'>
                    <button className="w-4/12
                    h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10
                    btn-small-text text-xs xl:text-sm
                    font-medium text-white" id="header-shop-btn">Shop</button>
                    <button className="w-4/12
                    h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10
                    btn-small-text text-xs xl:text-sm
                    font-medium text-white" id="header-learn-btn">Learn</button>
                </div>
        </div>
    )
}