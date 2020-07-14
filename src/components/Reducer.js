
//state - old state/ before update
//action - what happened/ what update?
//reducer - used to update store
//return update or old state
function reducer(state, action){
    console.log({state, action});
    if(action.type === DECREASE){
      return {...state, count: state.count - 1}
    }
    if(action.type === INCREASE){
      return {...state, count:state.count + 1}
    }
    if(action.type === RESET){
      return {...state, count: 0}
    }
    if(action.type === CHANGE_NAME){
      return {...state, name: "pissar"}
    }
    return state;
}

export default reducer;