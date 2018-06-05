import React, { Component} from 'react';
import {eurofied} from '../globals'
import store from '../store'
import { toppingsPrice } from '../actions/index'
import { connect } from 'react-redux'

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
    }
  }

  
  createSelectedToppings() {
    return toppings.choices.reduce(function(acc, i) {
    acc[i] = false;
    return acc;
    }, {});
  }

  selectedToppings = this.createSelectedToppings()

  count = 0
 

  checkMax() {
    // returns true if three toppings are selected else returns false. used to disable checkboxes
    if (this.count >= 3 ) {
      return true
    }
    else {return false}
  }


  trackToppings(topping) {
    // used when checkbox is clicked. adds selected topping to selectedToppings. 
    // Removes it from selected Toppings if it was already in (checkbox was unchecked)
    if (
      this.selectedToppings[topping]
    ) {
      this.selectedToppings[topping] = false
      this.count -= 1
    } else {
        this.selectedToppings[topping] = true
        this.count += 1
      }
    }

  
    handleChange(event) {
      // keep track of which selections are made
      this.trackToppings(event.target.id)
      // set the state of the buttons so the buttons get updated
      this.setState({isDisabled : this.checkMax()})
      // track current subtotal 
      store.dispatch(toppingsPrice(
        {toppingsPrice: toppings.price * this.count}
      )
    )
  }

  onClick(event) {
    this.count = 0
    this.selectedToppings = this.createSelectedToppings()
    this.setState({isDisabled : this.checkMax()})
    store.dispatch(toppingsPrice(
      {toppingsPrice: 0}
    ))
  } 


  render() {
    console.log(this.selectedToppings, this.count)
    console.log(this.state.isDisabled)
    return (
        <div className="component">
          <h3>Choose your toppings</h3>
          <div className="menu">
            {toppings.choices.map((topping) =>
              
              <div className="topping">
                <input
                    type="checkbox"
                    id={ topping }
                    checked={this.selectedToppings[topping]}
                    disabled={this.state.isDisabled}
                    onChange = {this.handleChange.bind(this)}
                />
                { topping }
                <span>  &euro; { eurofied(toppings.price) }</span>
              </div>
            )}
          </div>
          
          <button 
            type="button"
            className="menu"
            onClick={this.onClick.bind(this)}
          > reset choices</button>

          <div className="subtotal">
            price of selected item: {eurofied(this.props.toppingsPrice)}
          </div>

        </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    toppingsPrice : state.priceReducer.toppingsPrice,
  }
}


export default connect(mapStateToProps)(ToppingsComponent);
