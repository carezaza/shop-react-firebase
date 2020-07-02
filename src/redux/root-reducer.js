import { combineReducers } from 'redux';

import userReducer from './user/user.reducer'
import collectionsReducer from './collections/collections.reducer'
import productsReducer from './products/products.reducer'
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    shopPreview: collectionsReducer,
    productsData: productsReducer,
    cart: cartReducer
});

