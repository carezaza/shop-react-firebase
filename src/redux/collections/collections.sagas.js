import { takeLatest, call, put, all } from "redux-saga/effects";

import { getCollectionFromStore } from "../../firebase/firebase.utils";
import CollectionsActionTypes from "./collections.types";
import { fetchCollectionsSuccess , fetchCollectionsFailure } from './collections.actions';

function* fetchCollectionsFromStore() {
  try {
    const collections = yield call(getCollectionFromStore,'collections');
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(
    CollectionsActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsFromStore
  );
}

export function* collectionsSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
