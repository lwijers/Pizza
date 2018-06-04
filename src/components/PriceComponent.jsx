import React, { Component } from 'react';
import { connect } from 'react-redux'
import { eurofied } from '../globals'

class PriceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <div className="price">
        <p>your current Price = &euro;{eurofied(this.props.price)}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {price : state.priceReducer}
}

export default connect(mapStateToProps)(PriceComponent)
