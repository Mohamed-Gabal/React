import './hero.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero () {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='hero container'>
            <div className="hero-left">
                <Slider{...settings}>
                <div className="hero-men">
                    <div>
                        <h2>men Fashion</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
                            nisi quae velit veritatis voluptatem, laboriosam eaque dicta 
                            consequuntur sint doloremque amet vel beatae quas maxime, 
                            temporibus corporis! Facilis, illum accusantium?
                        </p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="hero-women">
                <div>
                        <h2>Women Fashion</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
                            nisi quae velit veritatis voluptatem, laboriosam eaque dicta 
                            consequuntur sint doloremque amet vel beatae quas maxime, 
                            temporibus corporis! Facilis, illum accusantium?
                        </p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="hero-kids">
                <div>
                        <h2>Kids Fashion</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus 
                            nisi quae velit veritatis voluptatem, laboriosam eaque dicta 
                            consequuntur sint doloremque amet vel beatae quas maxime, 
                            temporibus corporis! Facilis, illum accusantium?
                        </p>
                        <button>Shop Now</button>
                    </div>
                </div>
                </Slider>
            </div>
            <div className="hero-right">
                <div className="hero-right-up">
                    <div>
                        <h5>Save 20%</h5>
                        <h3>Special Offer</h3>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="hero-right-down">
                    <div>
                        <h5>Save 20%</h5>
                        <h3>Special Offer</h3>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

