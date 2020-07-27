import React from 'react';
import CartItems from './CartItems';
import {connect} from 'react-redux';
import {CLEAR_CART, GET_TOTAL} from '../components/Action';

const CartContainer = ({items =[], total, dispatch}) => {

    React.useEffect(()=>{
        dispatch({type: GET_TOTAL})
    });

    if(items.length === 0){
        return (
            <div className="center">
                <h1>Your Cart</h1>
                <h3>Is Currently Empty</h3>
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
                Total <span>${total}</span>
                </h4>
                </div>
                <button className="btn clear-btn" onClick={()=>dispatch({type:CLEAR_CART})}>clear cart</button>
            </footer>
        </div>
    )
};

const mapStateToProps = (store) => {
    return {items: store.cart, total: store.total}
} 



export default connect(mapStateToProps)(CartContainer);
