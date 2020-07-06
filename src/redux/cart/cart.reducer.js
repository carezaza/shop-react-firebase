import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  isShow: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_SHOW_CART:
      return {
        ...state,
        isShow: !state.isShow,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload.id),
      };
    case CartActionTypes.CLEAR_ALL:
      return{
        ...state,
        cartItems: [],
      }  
    default:
      return state;
  }
};

function addItemToCart(cartArray, itemObj) {
  const existingItem = cartArray.find((item) => item.id === itemObj.id);
  if (existingItem) {
    return cartArray.map((item) =>
      item.id === itemObj.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [
    ...cartArray,
    {
      ...itemObj,
      quantity: 1,
      realPrice: itemObj.price - (itemObj.price * itemObj.discount) / 100,
    },
  ];
}

function removeItemFromCart(cartArray, itemObj) {
  const existingItem = cartArray.find((item) => item.id === itemObj.id);
  if (existingItem.quantity === 1) {
    return cartArray.filter((item) => item.id !== itemObj.id);
  }
  return cartArray.map((item) =>
    item.id === itemObj.id ? { ...item, quantity: item.quantity - 1 } : item
  );
}

function clearItemFromCart(cartArray, id) {
  return cartArray.filter((item) => item.id !== id);
}

export default cartReducer;
