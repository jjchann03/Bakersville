import { useEffect } from 'react';
import './courses.css'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";


export default function Courses(){
    let box;
    useEffect(()=>{
        box=document.querySelector(".product-slider");
    },[])

    const data = [{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    },{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    },{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    },{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    },{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    },{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    },{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    },{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    },{
        img:"card-img.png",
        imgTxt:"Learn Baking with ease",
        desc:"Learn with the best quality teachers"
    }];

    const prevSlide = (e) => {
        let width = box.clientWidth/2;
        box.scrollLeft = box.scrollLeft-width;
        console.log(width);
    };

    const nextSlide = (e) => {
        let width = box.clientWidth/2;
        box.scrollLeft = box.scrollLeft+width;
    };


    return(
        <div id='courses-body' className='flex justify-center items-center flex-col'> 
            <div id="courses-header" className='flex flex-col 
            w-10/12 sm:w-7/12 lg:w-5/12
            mt-[1rem] sm:mt-4 md:mt-8'>
                <h3 id="courses-heading" className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold  mb-[0.5rem] md:mb-4'>Courses</h3>
                <p className='text-[0.6rem] phone:text-xs md:text-sm lg:text-base tracking-[1px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div> 
            <div className="w-full flex flex-col justify-center items-center py-4" >
                <div className="flex w-full product-slider py-8 box-border">
                    {data.map((product, index) => (
                        <div key={index} className="mx-[1.5rem] xl:min-w-52 shadow-[0_0px_8px_3px_rgba(0,0,0,0.4)] hover:scale-[1.1] transition ease 1s box-border">
                            <div id='card-img-container' className='w-11/12 m-2 aspect-[3/2] box-border flex justify-center items-center text-white font-medium text-sm'>
                                {product.imgTxt} 
                            </div>
                            <div className='flex justify-around text-neutral-400'>
                                <div className='flex justify-center items-center text-xs'><FaBookBookmark /> Lesson</div>
                                <div className='flex justify-center items-center text-xs'><IoPerson /> Student</div>
                                <div className='flex justify-center items-center text-xs'><FaTrophy /> Beginner</div>
                            </div>
                            <p className='text-sm py-2 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className='w-full'>
                                <button className='w-11/12 m-auto bg-transparent border-[1px] border-black my-2 py-2 text-xs font-medium course-btn'>START</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div id='carousel-btn-container' className='mt-8'>
                    <button className='p-2 bg-transparent border-[2px] rounded-full text-black hover:text-red-900 border-black hover:border-red-900 mx-4' onClick={prevSlide}>
                        <MdNavigateBefore/>
                    </button>
                    <button className='p-2 bg-transparent border-[2px] rounded-full text-black hover:text-red-900 border-black hover:border-red-900 mx-4' onClick={nextSlide}>
                        <MdNavigateNext />
                    </button>
                </div>
            </div>
        </div>
    )
}