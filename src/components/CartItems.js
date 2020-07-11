import React from 'react'
import cartItems from '../cart-items'

const CartItems = ({item:{title, img, amount, price}}) => {
    return (
        <div>
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <h4>${price}</h4>
            <button> Remove </button>

            {/* increase amount */}
            <button className="amount-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
            </button>
            {/* amount */}
            <p className="amount">{amount}</p>
            {/* decrease amount */}
            <button className="amount-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
            </button>
        </div>
    )
}

export default CartItems;