import { createSelector } from "reselect";

const selectUsersData = (state) => state.usersData;

export const selectUsers = createSelector(
  [selectUsersData],
  (data) => data.users ? data.users : []
);

export const selectIsFetching = createSelector(
    [selectUsersData],
    data => data.isFetching
)

export const selectError = createSelector(
    [selectUsersData],
    data => data.error
)
