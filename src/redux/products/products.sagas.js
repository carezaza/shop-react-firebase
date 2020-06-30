import { takeLatest, put, all, call } from "redux-saga/effects";

import ProductsActionTypes from "./products.types";

import { createProduct } from "../../firebase/firebase.utils";
import { addProductSuccess, addProductFailure } from "./products.actions";

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

export function* productsSagas() {
  yield all([call(onAddProductStart)]);
}
