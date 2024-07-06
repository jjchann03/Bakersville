import './content.css'

export default function Content(){
    return(
        <div className="content-body">
            <div className='content-container'>
                <div className='content-img'>
                    <img src={`${process.env.PUBLIC_URL}/images/Home/content1.png`} alt='img'></img>
                </div>
                <div className='content-details'>
                    <h4>SATISFY YOUR CRAVINGS</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='content-btn'>GRAB NOW</button>
                </div>
            </div>

            <div className='content-container'>
                <div className='content-img'>
                    <img src={`${process.env.PUBLIC_URL}/images/Home/content2.png`} alt='img'></img>
                </div>
                <div className='content-details'>
                    <h4>LOVE YOURSELF</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='content-btn'>SIGN UP</button>
                </div>
            </div>

            <div className='content-container'>
                <div className='content-img'>
                    <img src={`${process.env.PUBLIC_URL}/images/Home/content3.png`} alt='img'></img>
                </div>
                <div className='content-details'>
                    <h4>MADE WITH LOVE</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='content-btn'>ABOUT US</button>
                </div>
            </div>

            <div className='content-container'>
                <div className='content-img'>
                    <img src={`${process.env.PUBLIC_URL}/images/Home/content4.png`} alt='img'></img>
                </div>
                <div className='content-details'>
                    <h4>ENROLL COURSES</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='content-btn'>READ MORE</button>
                </div>
            </div>
        </div>
    )
}