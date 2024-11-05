
import './landing.css'
import img1 from '../../imges/mah1.jpeg'
import img2 from '../../imges/mah2.jpeg'
import img3 from '../../imges/mah3.jpeg'
import img4 from '../../imges/mah4.jpeg'
import img5 from '../../imges/mah5.jpeg'
import img6 from '../../imges/mah6.jpg'
import img7 from '../../imges/mah7.jpg'
import img8 from '../../imges/mah8.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Landing () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
    <div className='landing container'>

        <div className="imges">
            <Slider{...settings}>
                
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />      
            </Slider>
        </div>
    </div>
    )
}

export default Landing
