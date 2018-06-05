import React, { Component } from 'react';
import './styling/App.css';
import PizzaSizeComponent from './components/PizzaSizeComponent'
import SauceComponent from './components/SauceComponent'
import ToppingsComponent from './components/ToppingsComponent'
import PriceComponent from './components/PriceComponent'
import DroneComponent from './components/DroneComponent'

class App extends Component {
  render() {
    return (
      <div className="pizzaApp">
        <PizzaSizeComponent/>
        <SauceComponent/>
        <ToppingsComponent/>
        <DroneComponent/>
        <PriceComponent/>
      </div>
    );
  }
}

export default App;
