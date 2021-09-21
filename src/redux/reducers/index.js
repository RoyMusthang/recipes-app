import { combineReducers } from 'redux';
import user from './user';
import meals from './meals';
import drinks from './drinks';

const rootReducers = combineReducers({ user, meals, drinks });

export default rootReducers;
