import { combineReducers } from 'redux';

import usersReducer from './reducers/usersReducer'
import bagDropdownReducer from './reducers/bagDropdownReducer';

const rootReducer = combineReducers({
    user: usersReducer,
    dropdown: bagDropdownReducer
});

export default rootReducer;