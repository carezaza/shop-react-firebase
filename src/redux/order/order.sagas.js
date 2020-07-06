import { takeLatest, put, all, call } from "redux-saga/effects";
import OrderActionTypes from "./order.types";
import { clearAllItem } from "../cart/cart.actions";
import { createOrderToStore,fetchOrdersFromStore } from "../../firebase/firebase.utils";
import {
  createOrderSuccess,
  createOrderFailure,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from "./order.actions";

function* createOrder({ payload: order }) {
  try {
    yield call(createOrderToStore, order);
    yield put(createOrderSuccess("Your order has been created."));
    yield put(clearAllItem());
  } catch (error) {
    yield put(createOrderFailure(error.message));
  }
}

function* onCreateOrderStart() {
  yield takeLatest(OrderActionTypes.CREATE_ORDER_START, createOrder);
}

function* fetchOrders() {
  try {
    const orders = yield call(fetchOrdersFromStore);
    yield put(fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(fetchOrdersFailure(error.message));
  }
}

function* onFetchOrdersStart() {
  yield takeLatest(OrderActionTypes.FETCH_ORDERS_START, fetchOrders);
}

export function* orderSagas() {
  yield all([call(onCreateOrderStart),call(onFetchOrdersStart)]);
}
