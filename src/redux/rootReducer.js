import {combineReducers} from 'redux';

import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
    searchItems:searchReducer,
    
    
});

export default rootReducer;