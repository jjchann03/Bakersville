import './home.css'
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import AboutUs from './Components/AboutUs/AboutUs';
import Courses from './Components/Courses/Courses';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';

export default function Home(){
    return(
        <div className='home-body'>
            <Header />
            <Content />
            <AboutUs />
            {/* <Courses /> */}
            <Gallery />
            <Footer />
        </div>
    );
}