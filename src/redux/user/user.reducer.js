import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isPending: false,
  errorMessage: null,
  isChecking: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isPending: false,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isPending: false,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGN_UP_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isPending: true,
        errorMessage: null,
      };
    case UserActionTypes.CHECK_USER_SESSION_START:
      return {
        ...state,
        isChecking: true,
      }
    case UserActionTypes.CHECK_USER_SESSION_SUCCESS:
      return {
        ...state,
        isChecking: false,
      }
    default:
      return state;
  }
};

export default userReducer;
