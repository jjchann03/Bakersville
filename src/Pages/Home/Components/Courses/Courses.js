import './courses.css'

export default function Courses(){
    const data = [{
        "img":"",
        "img-txt":"Learn with ease",
        "desc":"Learn with the best quality teachers"
    },{
        "img":"",
        "img-txt":"Learn with ease",
        "desc":"Learn with the best quality teachers"
    },{
        "img":"",
        "img-txt":"Learn with ease",
        "desc":"Learn with the best quality teachers"
    },{
        "img":"",
        "img-txt":"Learn with ease",
        "desc":"Learn with the best quality teachers"
    }];

    return(
        <div id='courses-body' className='flex justify-center items-center flex-col'> 
            <div id="courses-header" className='flex flex-col 
            w-10/12 sm:w-7/12 lg:w-5/12
            mt-[1rem] sm:mt-4 md:mt-8'>
                <h3 id="courses-heading" className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold  mb-[0.5rem] md:mb-4'>Courses</h3>
                <p className='text-[0.6rem] phone:text-xs md:text-sm lg:text-base tracking-[1px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div> 
            <div id='carousel-body' className='flex flex-col justify-center items-center'>
                <div id='carousel-container' className='flex justify-center items-center w-[90%]'>
                    {/* {data.map((key,index),()=>{
                        
                    })} */}
                </div>
                <div className='carousel-btn-container'>
                    <button className='carousel-btn'></button>
                    <button className='carousel-btn'></button>
                </div>
            </div>
        </div>
    )
}