import { createSelector} from 'reselect';

const selectProducts = (state) => state.productsData

export const selectError = createSelector(
    [selectProducts],
    products => products.errorMessage
)

export const selectIsPending = createSelector(
    [selectProducts],
    products => products.isPending
)

export const selectSuccess = createSelector(
    [selectProducts],
    products => products.successMessage
)