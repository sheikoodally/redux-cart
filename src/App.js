import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

//Components
import Navigation from './components/Navigation.js';
import CartContainer from './components/CartContainer.js';

//Items
import cartItems from './cart-items';

//IMPORT ACTIONS
import {DECREASE, INCREASE, RESET, CHANGE_NAME} from './components/Action'

import {createStore} from 'redux';
//initial store
const initialStore = {
  count: 5,
  name: "john"
};



const store = createStore(reducer, initialStore);
store.dispatch({type: DECREASE});
store.dispatch({type: INCREASE});
store.dispatch({type: CHANGE_NAME});
store.dispatch({type: DECREASE});

function App() {

  console.log(cartItems);
  return (
    <div className="mainDiv">
      <Navigation cart = {store.getState()}/>
      <Container className="App">
        <header className="App-header">  
          <CartContainer items = {cartItems}/>
        </header>
      </Container>
    </div>
  );
}

export default App;
