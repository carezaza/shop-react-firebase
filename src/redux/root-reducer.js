import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import collectionsReducer from "./collections/collections.reducer";
import productsReducer from "./products/products.reducer";
import cartReducer from "./cart/cart.reducer";
import orderReducer from "./order/order.reducer";

import usersReducer from "./admin/users/users.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user", "productsData", "shopPreview"],
};

const rootReducer = combineReducers({
  user: userReducer,
  shopPreview: collectionsReducer,
  productsData: productsReducer,
  cart: cartReducer,
  orderData: orderReducer,
  usersData: usersReducer,
});

export default persistReducer(persistConfig, rootReducer);
