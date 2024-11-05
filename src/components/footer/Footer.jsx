
import  './footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import gabal from '../../imges/download.png'


function Footer () {
    return (
        <div className='footer'>
            <div className="footers">
                <div>
                    <h2>GET IN TOUCH</h2>
                    <p>No dolore ipsum accusam no lorem. 
                        Invidunt sed clita kasd clita et et 
                        dolor sed dolor. Rebum tempor no vero est 
                        magna amet no
                    </p>
                </div>
                <div>
                    <h2>QUICK SHOP</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Card</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Social Media</h2>
                    <ul>
                     <li><a href=""><FaTwitter /></a></li>   
                     <li><a href=""><FaFacebook /></a></li>   
                     <li><a href=""><RiLinkedinLine /></a></li>   
                     <li><a href=""><FaInstagram /></a></li>   
                     <li><a href=""><FaGithub />
                     </a></li>   
                    </ul>
                </div>
                <div>
                    <h2>NEWSLETTER</h2>
                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <div className='footer-search' >
                        <input type="text" placeholder='Your Email Adrees'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='gabal'>
                <p>@ This site is designed by Jabal</p>
                <img src={gabal} alt="" />
            </div>
        </div>
    )
}

export default Footer
