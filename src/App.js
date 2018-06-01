import React, { Component } from 'react';
import './styling/App.css';
import PizzaSizeComponent from './components/PizzaSizeComponent'
import SauceComponent from './components/SauceComponent'


class App extends Component {
  render() {
    return (
      <div className="ToppingsComponent">
       <PizzaSizeComponent/>
       <SauceComponent/>
      </div>
    );
  }
}

export default App;
