import React, { Component } from 'react'
import store from '../store'
import { droneDelivery } from '../actions/index'

class DroneComponent extends Component {

    handleChange(event) {
        if (event.target.checked) {
            store.dispatch(droneDelivery({
                droneDelivery : 1
            }))
        } else {
            store.dispatch(droneDelivery({
                droneDelivery : 0
            }))
        }
    }

    render() {
        return (
            <div className="droneComponent">
                <h3>Do you want extra fast delivery by turbo Drone?</h3>
                <p><i>adds 10% to the cost</i></p>
                <input 
                type='checkbox'
                onChange={ this.handleChange.bind(this)}
                />
                yes I want turbo drone delivery!
            </div>
        )
    }

}

export default DroneComponent