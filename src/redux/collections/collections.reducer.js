import CollectionsActionTypes from "./collections.types";

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: undefined,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionsActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetch: true,
        errorMessage: undefined,
      };
    case CollectionsActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetch: false,
        errorMessage: undefined,
      };
    case CollectionsActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetch: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
