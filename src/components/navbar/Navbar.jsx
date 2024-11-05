import { useEffect, useState } from 'preact/hooks';
import './navbar.css'
import { BsMoonStars } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineWbSunny } from 'react-icons/md';
import { RiMenuFill } from "react-icons/ri";




function Navbar({watchlist, cartItems, dark, changeTheam}) {

    let [openMenu , setopenMenu] = useState(false);
    function isopenMenu() {
        setopenMenu(!openMenu)
    }

    function closeMenu() {
        setopenMenu(false);
    }

    useEffect(function(){
        document.querySelector(".menu").onClick = function(){
            document.querySelector("nav ul").classList.toggle("open");
        }
    }, [])


    return (
        <nav>
            <Link to="/" style={{textDecoration: "none"}}>
                <h2>Gabal <span>Shop</span></h2>
            </Link>
            <ul className='open'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li className='products-name'><a href="#" onClick={isopenMenu}>Products <FaChevronDown /></a>
                    { openMenu &&   <div className='product-toggle'>
                        <Link to="/fake" onClick={closeMenu}>Fake Api Products</Link>
                    </div>}
                </li>
                <li><Link to="/contact">Contact</Link></li>
                    {dark ? 
                         <li><MdOutlineWbSunny className='sun-icons' onClick={changeTheam}/></li>
                        :  
                         <li><BsMoonStars className='moon-icons' onClick={changeTheam}/></li>
                    }
            </ul>
            <div className="navbar-icons">
                <div className="wishlist-part">
                    <Link to="/watchlist">
                        <FaHeart className='nav-icons' />
                        <span>({watchlist.length})</span>
                    </Link>
                </div>
                <div className="shoping-part">
                    <Link to="/cart">
                        <FaShoppingCart className='nav-icons'/> 
                        <span>({cartItems.length})</span>
                    </Link>
                </div>
            </div>
            <RiMenuFill className='menu'/>
        </nav >
    )
}

export default Navbar;
