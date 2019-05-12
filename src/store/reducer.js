import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer.js';
import homeReducer from '../pages/home/store/reducer.js';
import detailReducer from '../pages/detail/store/reducer.js';
import loginReducer from '../pages/login/store/reducer.js'


const reducer =  combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: detailReducer,
	login: loginReducer
})


export default reducer;