import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createApiReducer } from 'redux-api-mapper';
import config from './api/config';

const rootReducer = combineReducers({
  api  : createApiReducer(config),
  form : formReducer
});

export default createStore(rootReducer);
