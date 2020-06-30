import ProductsActionTypes from './products.types';

const INITIAL_STATE = {
    products: null,
    errorMessage: null,
    isPending: false,
    successMessage: null,
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductsActionTypes.ADD_PRODUCT_START:
            return {
                ...state,
                isPending: true,
                successMessage: null
            }
        case ProductsActionTypes.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isPending: false,
                successMessage: action.payload
            }
        case ProductsActionTypes.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;