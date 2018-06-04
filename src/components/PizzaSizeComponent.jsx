import React, { Component } from 'react';
import {eurofied} from '../globals' 
import store from '../store'
import { addPrice } from '../actions/index'
import { connect } from 'react-redux'

const pizzaSizes = [
    {'20cm NY Style' : 645},
    {'25cm NY Style' : 899},
    {'30cm NY Style' : 1149},
    {'35cm NY Style' : 1349}
]


class PizzaSizeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedItemName : '',
        selectedItemPrice : 645
      }
  }

  handleChange(event) {
    let pizzaPrice = 0
    pizzaSizes.forEach(function(size) {
   
      if  (Object.keys(size)[0] === event.target.value) {
        pizzaPrice =  Object.values(size)[0]
      }    
    });
  this.setState({selectedItemPrice: pizzaPrice})
  store.dispatch(addPrice({price: pizzaPrice}))  
} 

  render() {
      return (
        <form className="pizzaSizes">
          <p>select pizza size</p>
          <select name = " sizeMenu" onChange={this.handleChange.bind(this)}>
            {pizzaSizes.map((pizzaSize) =>
              <option 
                value = {Object.keys(pizzaSize)[0]}     
              >
                {Object.keys(pizzaSize)[0]} 
                &nbsp; &euro;
                {eurofied(Object.values(pizzaSize)[0])}
              </option>
            )
          }
        </select>
        <div className="subtotal">
          price of selected item: {eurofied(this.state.selectedItemPrice)}
        </div>
      </form> 
    )
  }
} 

export default connect(null, { addPrice })(PizzaSizeComponent)
