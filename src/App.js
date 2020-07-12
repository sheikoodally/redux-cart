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
    <div className="mainDiv">
      <Navigation/>
    <Container className="App">
      <header className="App-header">
        
        <CartContainer items = {cartItems}/>
      </header>
    </Container>
    </div>
  );
}

export default App;
