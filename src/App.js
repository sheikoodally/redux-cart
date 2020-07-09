import React from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar.js';
import CartContainer from './components/CartContainer.js';

//Items
import cartItems from './cart-items';

function App() {

  console.log(cartItems);
  return (

    <div className="App">
      <header className="App-header">
        <Navbar/>
        <CartContainer items = {cartItems}/>
      </header>
    </div>
  );
}

export default App;
