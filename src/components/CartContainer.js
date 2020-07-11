import React from 'react'

const CartContainer = ({items =[]}) => {

    if(items === ''){
        return (
            <div>
                Loading...
            </div>
        )  
    } else
    return (
        <div>
            Loaded
        </div>
    )
};

export default CartContainer;
