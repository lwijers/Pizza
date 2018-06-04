import React, { Component } from 'react';
import {eurofied} from '../globals'

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

class SauceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {value1:"",value2:"",value3:""};
    
        this.handleChange = this.handleChange.bind(this);
        }
    
    handleChange(topping) {
    // this.setState({value: event.target.value});
    
    }
      

  render() {
    return (
        <div className="toppings"><h3>Choose your toppings</h3>
        `
        { toppings.choices.map((topping) =>
          <div className="topping">
            <input 
                type="checkbox"
 
                disabled={ selectedToppings.length >= 3 }
                onClick = {this.handleChange(topping)}
            />  
            { topping }
            <span>  &euro; { eurofied(toppings.price) }</span>
          </div>
        )}
        </div>
    );
  }
}
export default SauceComponent;
// checked={ toppings.choices.includes(topping) }