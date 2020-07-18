import React from 'react';
import CartItems from './CartItems';
import {connect} from 'react-redux';

const CartContainer = ({items =[], total}) => {

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
                Total <span>{total}</span>
                </h4>
                </div>
                <button className="btn clear-btn">clear cart</button>
            </footer>
        </div>
    )
};

const mapStateToProps = (store) => {
    return {items : store.cart, total:store.total}
};

export default connect(mapStateToProps)(CartContainer);
