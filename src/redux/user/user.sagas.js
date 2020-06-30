import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  auth,
  createUserProfile,
  checkExistsDisplayName,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
  checkUserSessionSuccess
} from "./user.actions";

function* getUserSnapShot(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfile, userAuth, additionalData);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

// ****** Sign Up ******** //
function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp); // go to signUp function
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const checkDisplayName = yield call(checkExistsDisplayName, displayName);
    if (checkDisplayName) {
      yield put(signUpFailure("This display name is already taken!"));
      return;
    }
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      signUpSuccess({ user, additionalData: { displayName, role: "user" } })
    );
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth)  {
      yield put(checkUserSessionSuccess());
      return;
    }
    yield getUserSnapShot(userAuth);
    yield put(checkUserSessionSuccess());
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email,password);
    yield getUserSnapShot(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}


function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getUserSnapShot(user, additionalData);
}

function* onCheckUserSessionStart() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION_START, isUserAuthenticated);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  }catch (error) {
    yield put(signOutFailure(error.message));
  }
}


export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onCheckUserSessionStart),
    call(onEmailSignInStart),
    call(onSignOutStart)
  ]);
}
