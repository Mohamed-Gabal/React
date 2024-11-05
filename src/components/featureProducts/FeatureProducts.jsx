
import './featureProducts.css'
import products from './Fproducts'
import {FaCartPlus, FaStar} from 'react-icons/fa'
import { FaHeart } from "react-icons/fa";



function FeatureProducts ({addToWatchlist, addToCart}) {
    return (
        <div className='featureProducts container'>
            <h2>Feature Products</h2>
            <div className="products">
                {products.map(product => {
                    return(
                            <div className="fproduct">
                                <img src={product.img} alt="" />
                                <h3>{product.name}</h3>
                                <div className='fproduct-price'>
                                    <h4>${product.price}</h4>
                                    <h5>${product.nextPrice}</h5>
                                </div>
                                <div className='raiting'>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                    </div>
                                    <div className='control'>
                                        <FaHeart className='fproduct-icon' onClick={addToWatchlist}/>
                                        <FaCartPlus className='fproduct-icon' onClick={addToCart}/>
                                    </div> 
                            </div>
                        )
                })}
            </div>
        </div>
    )
}


export default FeatureProducts
