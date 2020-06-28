import UserActionTypes from "./user.types";

export const signInWithEmail = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
})

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const checkUserSessionStart = () => ({
  type: UserActionTypes.CHECK_USER_SESSION_START
});

export const checkUserSessionSuccess = () => ({
  type: UserActionTypes.CHECK_USER_SESSION_SUCCESS
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (errorMessage) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage
});
