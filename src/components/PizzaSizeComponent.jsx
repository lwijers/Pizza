import React, { Component } from 'react';

class PizzaSizeComponent extends Component {
  render() {
    return (
      <div className="pickToppings">
        <p>select pizza size</p>
        <select name="cars">
            <option value="20cm ">20cm NY Style € 6,45</option>
            <option value="25cm">25cm NY Style € 8,99</option>
            <option value="30cm">30cm NY Style € 11,49</option>
            <option value="35cm">35cm NY Style € 13,49</option>
        </select>

       </div>
    );
  }
}
export default PizzaSizeComponent;
