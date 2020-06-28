import CollectionsActionTypes from './collections.types';

export const fetchCollectionsStart = () => ({
    type: CollectionsActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionsSuccess = (collections) => ({
    type: CollectionsActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collections
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: CollectionsActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})