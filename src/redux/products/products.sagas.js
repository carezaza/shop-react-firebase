import { takeLatest, put, all, call } from "redux-saga/effects";

import ProductsActionTypes from "./products.types";

import { createProduct, getProductsFromStore } from "../../firebase/firebase.utils";
import { addProductSuccess, addProductFailure, fetchProductsSuccess, fetchProductsFailure } from "./products.actions";

function* addProductToStore({ payload: product }) {
  try {
    yield call(createProduct, product);
    yield put(addProductSuccess("Uploaded successfully!"));
  } catch (error) {
    yield put(addProductFailure(error.message));
  }
}

function* onAddProductStart() {
  yield takeLatest(ProductsActionTypes.ADD_PRODUCT_START, addProductToStore);
}

function * fetchProductsFromStore(){
  try{
    const products = yield call(getProductsFromStore);
    yield put(fetchProductsSuccess(products));
  }catch (error) {
    put(fetchProductsFailure(error.message));
  }
}

function * onFetchProductStart() {
  yield takeLatest(ProductsActionTypes.FETCH_PRODUCTS_START, fetchProductsFromStore);
}

export function* productsSagas() {
  yield all([call(onAddProductStart),call(onFetchProductStart)]);
}
