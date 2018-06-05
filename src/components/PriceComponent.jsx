import React, { Component } from 'react';
import { connect } from 'react-redux'
import { eurofied } from '../globals'

class PriceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

totalPrice(base, sauce, topping, droneNeeded) {
  return (
    base + sauce + topping) +
    (droneNeeded * 
    (0.1 *(base + sauce + topping))
  )
}

  render() {
    return (
      <div className="component">
        <p>your current Price = 
          <h3 className="finalPrice">
            &euro;&nbsp;
            {eurofied(
              this.totalPrice(
                this.props.pizza.basePrice, 
                this.props.pizza.saucePrice, 
                this.props.pizza.toppingsPrice,
                this.props.pizza.droneDelivery
                )
              )
            }
          </h3>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizza : state.priceReducer,
  }
}

export default connect(mapStateToProps)(PriceComponent)
