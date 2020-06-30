import ProductsActionTypes from './products.types';

export const addProductStart = (product) => ({
    type: ProductsActionTypes.ADD_PRODUCT_START,
    payload: product
})

export const addProductSuccess = (successMessage) => ({
    type: ProductsActionTypes.ADD_PRODUCT_SUCCESS,
    payload: successMessage
})

export const addProductFailure = (errorMessage) => ({
    type: ProductsActionTypes.ADD_PRODUCT_FAILURE,
    payload: errorMessage
})