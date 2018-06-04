export const ADD_PRICE = "ADD_PRICE"

export const addPrice = (price) => {
    return {
        type: ADD_PRICE,
        payload: price 
    }
}