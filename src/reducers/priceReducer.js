import { BASE_PRICE, SAUCE_PRICE, TOPPINGS_PRICE} from '../actions/index'


export default function(state, {type, payload}) {
  switch (type) {

  case BASE_PRICE:
    return {...state,  basePrice: payload.basePrice}

  case SAUCE_PRICE:
    return {...state, saucePrice: payload.saucePrice}

  case TOPPINGS_PRICE:
    return {...state, toppingsPrice: payload.toppingsPrice}

  default:
    return {
      basePrice : 0,
      saucePrice : 0,
      toppingsPrice : 0,
      drone : false,
    }
  }
}
