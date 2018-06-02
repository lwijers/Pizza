import React, { Component } from 'react';

class SauceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {value1:"",value2:"",value3:""};
    
        this.handleChange = this.handleChange.bind(this);
        }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      

  render() {

    const toppings = [  
        'Pineapple', 'Corn', 
        'Olives (green)', 'Red Onion',
        'Spinach', 'Cherry tomatoes',
        'Chicken'
    ]

    const dropdownContent = toppings.map((topping) => 
        <option value={topping}>{topping}</option>);

    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Pick your favorite toppings (0.50 per topping):
                <select value1={this.state.value} onChange={this.handleChange}>
                   {dropdownContent}
                </select>
                <select value2={this.state.value} onChange={this.handleChange}>
                   {dropdownContent}
                </select>
                <select value3={this.state.value} onChange={this.handleChange}>
                   {dropdownContent}
                </select>
            </label>
      </form>
    );
  }
}
export default SauceComponent;
