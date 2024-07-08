import './gallery.css'

export default function Gallery(){
    return(
        <div id="gallery-body" className='w-full flex flex-col justify-center items-center'>
            <div id="gallery-header" className='flex flex-col 
            w-10/12 sm:w-7/12 lg:w-5/12
            mt-[1rem] sm:mt-4 md:mt-8'>
                <h3 id="section-heading" className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold  mb-[0.5rem] md:mb-4'>Gallery</h3>
                <p className='text-[0.6rem] phone:text-xs md:text-sm lg:text-base tracking-[1px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div> 
            <div id="gallery-content-container" className='grid grid-cols-6 grid-rows-4 
            w-11/12 phone:w-10/12 md:w-9/12 mt-4 md:mt-8 mb-16'>
                <div className='col-span-4 row-span-4'>
                    <img src={`${process.env.PUBLIC_URL}/images/Home/gallery1.png`} alt="img" id='gallery-big-img'></img>
                </div>
                
                <div className='col-span-2 row-span-3 bg-[#ECDCC5]' id='gallery-img2-container'></div>

                <div className='col-span-2 row-span-1 bg-[#ECDCC5] flex justify-center items-center'>
                    <button className='w-10/12 h-3/5 
                    text-[0.4rem] phone:text-[0.5rem] md:text-[0.6rem] lg:text-xs xl:text-sm
                    font-semibold' id='gallery-btn'>VIEW PRODUCTS</button>
                </div>
                
            </div>
        </div>
    );
}