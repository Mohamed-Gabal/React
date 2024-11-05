
import './contact.css'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <h2 className='title-content'>Contact<span>Us</span></h2>
        <div className='contact container'>
            <div className="contact-left">
                <form>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Subject'/>
                    <textarea placeholder='Massege'></textarea>
                    <button>send message</button>
                </form>
            </div>
            <div className="contact-right">
                <div className="contact-right-up">
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.5350276014287!2d31.381775361173204!3d31.039201874544247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db2084f100d%3A0x79085c0e5ed24184!2z2LTYsdmD2Kkg2KjYsdmF2KzYqSDZiCDYqtiz2YjZitmCIE5TU0VneXB0!5e0!3m2!1sar!2seg!4v1724539927359!5m2!1sar!2seg'></iframe>
                </div>
                <div className="contact-right-down">
                    <div>
                        <FaLocationCrosshairs className='contact-icon'/>
                        <span>Egypt - Aldaqahlih - Mnsuruh</span>
                    </div>
                    <div>
                        <FaEnvelope  className='contact-icon'/>
                        <span>bravocoading123@gmail.com</span>
                    </div>
                    <div>
                        < FaPhoneAlt className='contact-icon'/>
                        <span>+0123456789</span>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default Contact
