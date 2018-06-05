import { BASE_PRICE, SAUCE_PRICE, TOPPINGS_PRICE, DRONE_DELIVERY} from '../actions/index'


export default function(state, {type, payload}) {
  switch (type) {

  case BASE_PRICE:
    return {...state,  ...payload}

  case SAUCE_PRICE:
    return {...state, ...payload}

  case TOPPINGS_PRICE:
    return {...state, ...payload}
  
  case DRONE_DELIVERY:
    return {...state, ...payload}

  default:
    return {
      basePrice : 645,
      saucePrice : 0,
      toppingsPrice : 0,
      droneDelivery : 0,
    }
  }
}
