import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

//Components
import Navigation from './components/Navigation.js';
import CartContainer from './components/CartContainer.js';

//Items
import cartItems from './cart-items';

function App() {

  console.log(cartItems);
  return (

    <Container className="App">
      <header className="App-header">
        <Navigation/>
        <CartContainer items = {cartItems}/>
      </header>
    </Container>
  );
}

export default App;
