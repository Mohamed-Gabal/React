

import './cart.css'

const Cart = ({cartItems, removeFromCart, addToCart, dicrementProduct}) => {

    let total = 0;

    return (
       <>
            {cartItems.length == 0 ? <h2 className='no-product container'>No There Any Product In The Cart</h2> :  
            <div className='cart container'>
                    <div className="cart-products">
                        {cartItems.map(function(item){
                            total = total + item.price * item.qty
                            return(
                                <div className="cart-product">
                                    <div className="img">
                                    <img src={item.image ? item.image : item.img} alt="" />
                                    <h5>X{item.qty}</h5>
                                    </div>
                                    <h3>${item.price.toString().slice(0.6)}</h3>
                                    <div className="counter">
                                        <button onClick={() => addToCart(item)}>+</button>
                                        <h2>{item.qty}</h2>
                                        <button onClick={() => dicrementProduct(item)}>-</button>
                                    </div>
                                    <h4>${item.price * item.qty}</h4>
                                    <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className="total">
                        <h2>Total</h2>
                        <h3>{total.toString().slice(0, 6)}$</h3>
                    </div>
                </div>}
       </>
    )
}

export default Cart
