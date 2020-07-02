import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => {
  if (user.currentUser) {
    const userAuth = user.currentUser;
    return { ...userAuth };
  }
  return null;
});

export const selectIsPending = createSelector(
  [selectUser],
  (user) => user.isPending
);

export const selectFailure = createSelector(
  [selectUser],
  (user) => user.errorMessage
);

export const selectIsChecking = createSelector(
  [selectUser],
  (user) => user.isChecking
);
