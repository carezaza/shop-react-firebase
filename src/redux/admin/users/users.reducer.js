import UsersActionTypes from "./users.types";

const INITIAL_STATE = {
  users: null,
  isFetching: false,
  error: null,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case UsersActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
