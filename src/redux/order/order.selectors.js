import { createSelector } from "reselect";

const selectOrderData = (state) => state.orderData;

export const selectSuccess = createSelector(
  [selectOrderData],
  (data) => data.successMessage
);

export const selectIsPending = createSelector(
  [selectOrderData],
  (data) => data.isPending
);

export const selectOrders = createSelector(
  [selectOrderData],
  (data) => data.orders
);

export const selectUserOrder = (userId) =>
  createSelector([selectOrderData], (data) =>
    data.orders.filter((order) => order.userId === userId)
  );
