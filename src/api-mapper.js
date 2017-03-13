import { createMapper } from 'redux-api-mapper';
import config from './api/config';
import store from './store';

export default createMapper(store, config);
