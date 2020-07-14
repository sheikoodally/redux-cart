import React from 'react';
import CartItems from './CartItems';

const CartContainer = ({items =[]}) => {

    if(items.length === 0){
        return (
            <div>
                Your Bag Is Currently Empty
            </div>
        )  
    } 
    return (
        <div>
            {items.map((item) =>{
                return <CartItems key={item.id} item={item}/>
            })}

            <footer>
                <hr />
                <div className="cart-total">
                <h4 className="h4Footer">
                    total <span>$0.00</span>
                </h4>
                </div>
                <button className="btn clear-btn">clear cart</button>
            </footer>
        </div>
    )
};

export default CartContainer;
