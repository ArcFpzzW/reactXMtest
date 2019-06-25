import {combineReducers} from 'redux';

import  homeReducer from '../components/home/reducer'
import  secondReducer from '../components/second/reducer'
var reducer = combineReducers({
	home:homeReducer,
	second:secondReducer
})

export default reducer;