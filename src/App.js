import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

//Components
import Navigation from './components/Navigation.js';
import CartContainer from './components/CartContainer.js';

//Items
import cartItems from './cart-items';

//IMPORT ACTIONS
import {} from './components/Action';


import {createStore} from 'redux';
import Reducer from './components/Reducer';

//react-redux -provider -wrap app, connect -used in component

import {Provider} from 'react-redux';


//initial store
const initialStore = {
  cart: cartItems,
  total: 10, 
  amount: 4
};



const store = createStore(Reducer, initialStore);


function App() {
  
  return (
    <Provider store = {store}>
      <div className="mainDiv">
        <Navigation />
        <Container className="App">
          <header className="App-header">  
            <CartContainer />
          </header>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
