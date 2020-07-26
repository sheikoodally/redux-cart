import {DECREASE, INCREASE, RESET, CLEAR_CART, REMOVE, GET_TOTAL} from './Action';
//state - old state/ before update
//action - what happened/ what update?
//reducer - used to update store
//return update or old state
function reducer(state, action){
    /* if(action.type === DECREASE){
      return {...state, count: state.count - 1}
    } */

    if(action.type === CLEAR_CART){
      return {...state, cart:[]};
    }

    if(action.type === INCREASE){
      //map
      //check for same id
      //add +1 amount
      let tempCart = state.cart.map((singleItem) => {
        if(singleItem.id === action.payload.id){
          singleItem = {...singleItem, amount: singleItem.amount + 1};
        };
        return singleItem;
      });
      return {...state, cart: tempCart};
    }

    if(action.type === DECREASE){
      let tempCart = [action.payload];

      if(action.payload.amount === 1){
        tempCart = state.cart.filter((singleItem) => (singleItem.id !== action.payload.id));
      }
      else{
        tempCart = state.cart.map((singleItem) => {
          if(singleItem.id === action.payload.id){
            singleItem = {...singleItem, amount: singleItem.amount - 1}
          }
          return singleItem;
        })
      }
      return {...state, cart: tempCart};
    }

    if(action.type === REMOVE){
      return {...state, cart: state.cart.filter((cartItem)=>(cartItem.id !== action.payload.id))}
    }

    if(action.type === GET_TOTAL){

      let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
        const{price, amount} = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        
        return cartTotal;

      }, {
        total:0, amount:0
      })

      total = parseFloat(total.toFixed(2));

      return{...state, total:total, amount:amount}
    };

    return state;

}



export default reducer;