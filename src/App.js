import React, { Component } from 'react';
import './styling/App.css';
import PizzaSizeComponent from './components/PizzaSizeComponent'
import SauceComponent from './components/SauceComponent'
import ToppingsComponent from './components/ToppingsComponent'

class App extends Component {
  render() {
    return (
      <div className="ToppingsComponent">
       <PizzaSizeComponent/>
       <SauceComponent/>
       <ToppingsComponent/>
      </div>
    );
  }
}

export default App;
