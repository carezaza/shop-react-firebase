import { createSelector } from "reselect";

const selectDataCollection = (state) => state.shop;

export const selectCollections = createSelector(
  [selectDataCollection],
  (shop) => shop.collections
);

export const selectIsFetchingCollections = createSelector(
  [selectCollections],
  (collections) => collections.isFetching
);
