import { all, call, takeLatest, put } from "redux-saga/effects";
import UsersActionTypes from "./users.types";
import { fetchUsersSuccess, fetchUsersFailure } from "./users.actions";
import { fetchUsersFromStore } from "../../../firebase/firebase.utils";

function* fetchUsers() {
  try {
    const users = yield call(fetchUsersFromStore);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* onFetchUsersStart() {
  yield takeLatest(UsersActionTypes.FETCH_USERS_START, fetchUsers);
}

export function* usersSagas() {
  yield all([call(onFetchUsersStart)]);
}
