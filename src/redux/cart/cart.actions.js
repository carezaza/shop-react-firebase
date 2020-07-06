import CartActionTypes from "./cart.types";

export const toggleShowCart = () => ({
  type: CartActionTypes.TOGGLE_SHOW_CART,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})

export const clearAllItem = () => ({
  type: CartActionTypes.CLEAR_ALL,
})
