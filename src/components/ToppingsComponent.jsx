import React, { Component, setState} from 'react';
import {eurofied} from '../globals'
import store from '../store'
import { toppingsPrice } from '../actions/index'

const selectedToppings = []
const toppings =
  {
    price : 50,
    choices : [
      "Pineapple", "Corn",
      "Olives", "Red onion",
      "Spinach", "Cherry tomatoes",
      "Chicken",
    ]
  }




class ToppingsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled : false,
      selectedItemNames : [],
      selectedItemPrice : 0
    }
  }
  selectedToppings = []


  maxSelectionReached() {
    if (this.selectedToppings.length >= 3 ) {
      return true
    }
    else {return false}
  }

  manageSelection(id) {
    if (
      this.selectedToppings
      .includes(id)
    ) {
      this.selectedToppings = this.selectedToppings
      .filter(topping => topping != id)
    } else {
        this.selectedToppings.push(id)
      }
      console.log(this.selectedToppings);
    }

  handleChange(event) {
      this.manageSelection(event.target.id)
      this.setState({isDisabled : this.maxSelectionReached()})
      console.log(this.state.isDisabled)
      this.setState({selectedItemPrice: toppings.price})
      store.dispatch(toppingsPrice({saucePrice: toppings.price}))

  }

  render() {
    return (
        <div className="toppings"><h3>Choose your toppings</h3>
        { toppings.choices.map((topping) =>
          <div className="topping">
            <input
                type="checkbox"
                id={ topping }
                disabled={this.state.isDisabled}
                onChange = {this.handleChange.bind(this)}
            />
            { topping }
            <span>  &euro; { eurofied(toppings.price) }</span>
          </div>
        )}
        </div>
    );
  }
}

export default ToppingsComponent;
