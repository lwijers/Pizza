export const BASE_PRICE = "BASE_PRICE"
export const SAUCE_PRICE = "SAUCE_PRICE"
export const TOPPINGS_PRICE = "TOPPINGS_PRICE"

export const basePrice = (basePrice) => {
  return {
    type: BASE_PRICE,
    payload: basePrice
  }
}

export const saucePrice = (saucePrice) => {
  return {
    type: SAUCE_PRICE,
    payload: saucePrice
  }
}

export const toppingsPrice = (toppingsPrice) => {
  return {
    type: TOPPINGS_PRICE,
    payload: toppingsPrice
  }
}
