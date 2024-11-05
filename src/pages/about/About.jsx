
import './about.css'
import about from '../../imges/about.jpg'

const About = () => {
    return (
        <div className='about container'>
            <h2 className='a'>About <span>Us</span></h2>
            <div className="about-content">
            <div className="about-left">
                <img src={about} alt="" />
            </div>
            <div className="about-right">
                <h2>Welcome To <span>Bravo Shop</span></h2>
                <p>
                    <span>Bravo Shop</span>
                    is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius,
                     molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.
                </p>
                <button>Shop Now</button>
            </div>
            </div>
        </div>
    )
}

export default About
