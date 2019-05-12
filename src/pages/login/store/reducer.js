import { fromJS } from 'immutable'

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'change_login':
			return state.set('login',action.login)
		case 'login_out':
			return state.set('login',action.login)
		default:
			return state;
	}
}