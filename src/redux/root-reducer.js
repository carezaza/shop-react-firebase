import { combineReducers } from 'redux';

import userReducer from './user/user.reducer'
import collectionsReducer from './collections/collections.reducer'

export default combineReducers({
    user: userReducer,
    shop: collectionsReducer,
});

