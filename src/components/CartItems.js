import React from 'react'
import cartItems from '../cart-items'

const CartItems = ({item:{title, img, amount, price}}) => {
    return (
        <div>
            <img src={img} alt={title}/>
            {title + " " + price + " " + amount}
        </div>
    )
}

export default CartItems;