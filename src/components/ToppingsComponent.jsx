import React, { Component } from 'react';

class SauceComponent extends Component {
    constructor() {
        super()
        let count=0
    }

    keepCount= ()=> {
        // if (checked) {
        this.props.count += 1    
        console.log(this.counter)
        // }
    }


  render() {
    return (
      <div className="pickToppings">
        <p>Please select (a max of 3) toppings, + € 0.50 per topping</p>
        
        <div>
            <input type="checkbox" className="dog" 
                onClick={this.keepCount}/> <a>Pineapple</a>
        </div>
        <div>
            <input type="checkbox" className="dog" 
                onClick="KeepCount()"/> Corn
        </div>
        <div>
            <input type="checkbox" className="dog" 
                onClick="return KeepCount()"/> Olives (Green)
        </div>

        <div>
            <input type="checkbox" className="dog" 
                onClick="return KeepCount()"/> Red Onion    
        </div>

        <div>
            <input type="checkbox" className="dog" 
                onClick="return KeepCount()"/> Spinach
        </div>

        <div>
            <input type="checkbox" className="dog" 
                onClick="return KeepCount()"/> Cherry Tomatoes  
        </div>
        
        <div>
            <input type="checkbox" className="dog" 
                onClick="return KeepCount()"/> Chicken
        </div>
       </div>
    );
  }
}
export default SauceComponent;
