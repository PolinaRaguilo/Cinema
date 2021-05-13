import { combineReducers } from 'redux';
import { Seats } from './seats';
import { Films } from './films';

const rootReducer = combineReducers({ seats: Seats, films: Films });

export default rootReducer;
