import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isPending: false,
  errorMessage: null,
  isChecking: false,
  dropdownShow: false,
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
    case UserActionTypes.ADD_ADDRESS_FAILURE:
    case UserActionTypes.DELETE_ADDRESS_FAILURE:
    case UserActionTypes.EDIT_ADDRESS_FAILURE:
      return {
        ...state,
        isPending: true,
        errorMessage: null,
      };
    case UserActionTypes.CHECK_USER_SESSION_START:
      return {
        ...state,
        isChecking: true,
      };
    case UserActionTypes.CHECK_USER_SESSION_SUCCESS:
      return {
        ...state,
        isChecking: false,
      };
    case UserActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        dropdownShow: !state.dropdownShow,
      };
    case UserActionTypes.ADD_ADDRESS_START:
    case UserActionTypes.DELETE_ADDRESS_START:
    case UserActionTypes.EDIT_ADDRESS_START:
      return {
        ...state,
        isPending: true,
        errorMessage: null,
      };
    case UserActionTypes.ADD_ADDRESS_SUCCESS:
    case UserActionTypes.DELETE_ADDRESS_SUCCESS:
    case UserActionTypes.EDIT_ADDRESS_SUCCESS:
      return {
        ...state,
        isPending: false,
        errorMessage: null,
        currentUser: { ...state.currentUser, address: action.payload },
      };

    default:
      return state;
  }
};

export default userReducer;
