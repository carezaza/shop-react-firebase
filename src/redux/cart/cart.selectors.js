import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectIsShow = createSelector(
    [selectCart],
    cart => cart.isShow
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectQuantity = createSelector(
    [selectCartItems],
    cartItems => cartItems ? cartItems.reduce((acc, item) => acc=+item.quantity, 0) : 0
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems ? cartItems.reduce((acc,item) => acc + (item.quantity * item.realPrice) ,0) : 0
)