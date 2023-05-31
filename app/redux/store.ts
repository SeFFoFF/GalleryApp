import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {imagesReducer} from './reducers';

const rootReducer = combineReducers({
  images: imagesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
