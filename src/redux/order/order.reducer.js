import OrderActionTypes from "./order.types";

const INITIAL_STATE = {
  orders: [],
  successMessage: null,
  errorMessage: null,
  isPending: false,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.CREATE_ORDER_START:
      return {
        ...state,
        isPending: true,
        errorMessage: null,
      };
    case OrderActionTypes.CREATE_ORDER_FAILURE:
    case OrderActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload,
      };
    case OrderActionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isPending: false,
        errorMessage: null,
        successMessage: action.payload,
      };
    case OrderActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isPending: true,
        errorMessage: null,
      };
    case OrderActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        isPending: false,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
