import React, { Component } from 'react';

class ToppingsComponent extends Component {
  render() {
    return (
      <div className="pickToppings">
        <p>Please select topping</p>
        <select name="cars">
            <option value="WhiteSauce ">White sauce + € 0,- </option>
            <option value="RedSauce">Red sauce + € 0,</option>
            <option value="DoubleRedSauce">Double red sauce + € 1,-</option>
            <option value="MixItUp">Mix it up + € 1,50 </option>
        </select>

       </div>
    );
  }
}
export default ToppingsComponent;
