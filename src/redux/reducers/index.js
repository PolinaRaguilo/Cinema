import { combineReducers } from 'redux';
import { Seats } from './seats';

const rootReducer = combineReducers({ seats: Seats });

export default rootReducer;
