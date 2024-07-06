import './gallery.css'

export default function Gallery(){
    return(
        <div className="gallery-body">
            <div className="gallery-header">
                <h3 className="section-heading">Gallery</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="gallery-container">
                <img src={`${process.env.PUBLIC_URL}/images/Home/gallery1.png`} alt="img" id='gallery-big-img'></img>
                <div className="gallery-small-img-container">
                    <button className='btn' id='gallery-btn'>VIEW PRODUCTS</button>
                </div>
            </div>
        </div>
    );
}