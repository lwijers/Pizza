import React, { Component } from 'react';
import {eurofied} from '../globals'
import store from '../store'
import { saucePrice } from '../actions/index'
import { connect } from 'react-redux'

const sauces = [
  {'White sauce'  : 0},
  {'Red sauce' : 0},
  {'Double red sauce' :100},
  {'Mix it up' : 150}
]


class SauceComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      }
    }

    handleChange(event) {
      let sauceCost = 0
      sauces.forEach(function(size) {

        if  (Object.keys(size)[0] === event.target.value) {
          sauceCost =  Object.values(size)[0]
        }
      });

    store.dispatch(saucePrice({saucePrice: sauceCost}))
  }



  render() {
    return (
      <form className="component">
          <h3>select pizza sauce</h3>
          <select className = "menu" onChange={this.handleChange.bind(this)}>
            {sauces.map((sauce) =>
              <option
                value = {Object.keys(sauce)[0]}
              >
                {Object.keys(sauce)[0]}
                &nbsp; &euro;
                {eurofied(Object.values(sauce)[0])}
              </option>
            )
          }
        </select>
        <div className="subtotal">
          cost: {eurofied(this.props.saucePrice)}
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    saucePrice : state.priceReducer.saucePrice,
  }
}

export default connect(mapStateToProps)(SauceComponent);
