import React, { Component } from 'react';
import { connect } from 'react-redux'
import { eurofied } from '../globals'

class PriceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

totalPrice(base, sauce, topping) {
  return base + sauce + topping
}

  render() {
    return (
      <div className="price">
      {console.log(this.props)}
        <p>your current Price = &euro;{eurofied(this.totalPrice(this.props.pizza.basePrice, this.props.pizza.saucePrice, this.props.pizza.toppingsPrice))}</p>
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
