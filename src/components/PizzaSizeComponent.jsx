import React, { Component } from 'react';
import {eurofied} from '../globals'
import store from '../store'
import { basePrice } from '../actions/index'
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
    }
  }

  handleChange(event) {
    let pizzaPrice = 0
    pizzaSizes.forEach(function(size) {
      if  (Object.keys(size)[0] === event.target.value) {
        pizzaPrice =  Object.values(size)[0]
      }
    });
  store.dispatch(basePrice({basePrice: pizzaPrice}))
}

  render() {
      return (
        <form className="component">

          <h3>select pizza size</h3>
        
          <select className = "menu" onChange={this.handleChange.bind(this)}>
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
          cost: {eurofied(this.props.basePrice)}
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basePrice : state.priceReducer.basePrice
  }
}

export default connect(mapStateToProps)(PizzaSizeComponent)
