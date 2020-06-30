import { createSelector } from "reselect";

const selectDataCollection = (state) => state.shopPreview;

export const selectCollections = createSelector(
  [selectDataCollection],
  (shop) => shop.collections
);

export const selectIsFetchingCollections = createSelector(
  [selectCollections],
  (collections) => collections.isFetching
);

export const selectTypes = createSelector(
  [selectCollections],
  collection => collection ? collection.map(c => c.title) : []
)
