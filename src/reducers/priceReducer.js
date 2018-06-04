
import { ADD_PRICE } from '../actions/index'

export default (state = 0, action = {}) => {
    switch (action.type) {
        case ADD_PRICE:
            return action.payload.price
        default:
            return state
    }
}