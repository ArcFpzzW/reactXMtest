import {combineReducers} from 'redux';

import  homeReducer from '../components/home/reducer'
import  secondReducer from '../components/second/reducer'
import  thirdReducer from '../components/third/reducer'
var reducer = combineReducers({
	home:homeReducer,
	second:secondReducer,
	third:thirdReducer
})

export default reducer;