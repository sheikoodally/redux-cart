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
        </div>
    )
};

export default CartContainer;
