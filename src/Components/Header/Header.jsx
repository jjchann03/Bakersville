import './header.css'
import Navbar from '../../Navbar/Navbar'
  
export default function Header(props){
    const {data} = props;
    return(
        <div id='header-body' className='w-full h-auto box-border p-4 text-white rounded-b-[6rem] phone:rounded-b-[8rem] md:rounded-b-[10rem]' style={{backgroundImage:`url(${data.img})`}}>
            <Navbar />
            <div id='header-container' className='w-full flex-col flex justify-center items-center my-2 ph:my-4 sm:my-8 md:my-12 lg:my-16 xl:my-20 box-border'>
                <h1 className='text-[1.5rem] ph:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold my-4 w-7/12 sm:w-6/12 text-center'>
                    {(data.heading)?
                        (data.heading):
                        (<>
                            Welcome to <span>the </span><span>Bakers</span> villa
                        </>)
                    }
                </h1>
                <p className='w-11/12 sm:w-9/12 lg:w-7/12 text-center text-[0.6rem] ph:text-xs md:text-sm lg:text-base mb-4'>{data.parah}</p>
                <button className='text-[0.59rem] sm:text-xs lg:text-sm border-[1px] rounded-3xl px-4 sm:px-8 py-2 mt-2 phone:mt-4 md:mt-8 mb-4 sm:mb-8 lg:mb-12 hover:border-[#843F20] hover:bg-[#843F20] transition ease-in-out duration-[0.8s]'>{data.button}</button>
            </div>
        </div>
    )
}