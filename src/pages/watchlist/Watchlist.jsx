

import { FaCartPlus, FaTimes } from 'react-icons/fa'
import './watchlist.css'

const Watchlist = ({watchlist, addToCart, removeFromWatchList}) => {
    return (
        <div className='container'>
        {watchlist.length == 0 ? <h2 className='no-product'>No There Any Product in Watchlist</h2> : 
            <div className='watch-list '>
                {watchlist.map(item => {
                    return (
                        <div className="watch-list-roduct">
                            <img src={item.image ? item.image : item.img} alt=''/>
                            <h2>{item.name}</h2>
                            <h3>Price: ${item.price}</h3>
                            <div className="bor">
                                <button onClick={() => addToCart(item)}><FaCartPlus className='btn-a'/></button>
                                <button onClick={() => removeFromWatchList(item)}><FaTimes className='btn-b'/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        }
        </div>
         )
        }
export default Watchlist
