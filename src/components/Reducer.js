import {DECREASE, INCREASE, RESET, CLEAR_CART, REMOVE} from './Action';
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
      console.log("increase");
    }

    if(action.type === DECREASE){
      console.log("decrease");
    }

    if(action.type === REMOVE){
      return {...state, cart: state.cart.filter((cartItem)=>(cartItem.id !== action.payload.id))}
        }

    return state;
}

export default reducer;