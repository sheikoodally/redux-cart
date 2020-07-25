import {DECREASE, INCREASE, RESET, CLEAR_CART} from './Action';
//state - old state/ before update
//action - what happened/ what update?
//reducer - used to update store
//return update or old state
function reducer(state, action){
    /* if(action.type === DECREASE){
      return {...state, count: state.count - 1}
    } */

    if(action.type === CLEAR_CART){
      return {...state, cart:[]}
    }
    
    return state;
}

export default reducer;