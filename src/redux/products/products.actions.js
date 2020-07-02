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

export const fetchProductsStart = () => ({ 
    type: ProductsActionTypes.FETCH_PRODUCTS_START, 
})

export const fetchProductsSuccess = (product) => ({
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: product
})

export const fetchProductsFailure = (errorMessage) => ({
    type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: errorMessage
})