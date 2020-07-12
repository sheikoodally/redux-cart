import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

//Components
import Navbar from './components/Navbar.js';
import CartContainer from './components/CartContainer.js';

//Items
import cartItems from './cart-items';

function App() {

  console.log(cartItems);
  return (

    <Container className="App">
      <header className="App-header">
        <Navbar/>
        <CartContainer items = {cartItems}/>
      </header>
    </Container>
  );
}

export default App;
