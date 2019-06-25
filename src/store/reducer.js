import {combineReducers} from 'redux';

import  homeReducer from '../components/home/reducer'

var reducer = combineReducers({
	home:homeReducer

})

export default reducer;