import { createSelector } from "reselect";

const selectProductsData = (state) => state.productsData;

export const selectError = createSelector(
  [selectProductsData],
  (data) => data.errorMessage
);

export const selectIsPending = createSelector(
  [selectProductsData],
  (data) => data.isPending
);

export const selectSuccess = createSelector(
  [selectProductsData],
  (data) => data.successMessage
);

export const selectProduct = createSelector(
  [selectProductsData],
  (data) => data.products
);

export const selectProducts = createSelector([selectProductsData], (data) =>
  data.products ? data.products : []
);

export const selectProductsByType = (type) =>
  createSelector([selectProducts], (products) =>
    products ? products.filter((product) => product.type === type) : []
  );
