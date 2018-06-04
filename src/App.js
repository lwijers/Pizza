import React, { Component } from 'react';
import './styling/App.css';
import PizzaSizeComponent from './components/PizzaSizeComponent'
import SauceComponent from './components/SauceComponent'
import ToppingsComponent from './components/ToppingsComponent'
import PriceComponent from './components/PriceComponent'

class App extends Component {
  render() {
    return (
      <div className="ToppingsComponent">
       <PizzaSizeComponent/>
       <SauceComponent/>
       <ToppingsComponent/>
       <PriceComponent/>
      </div>
    );
  }
}

export default App;
