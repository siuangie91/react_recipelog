import { combineReducers } from 'redux';

import { SET_RECIPE } from '../_actions';

function recipes(state = [], action) {
	switch(action.type) {
		case SET_RECIPE:
			state = [...state, action.recipe];
			return state;
		default: 
			return state;
	}
}

const rootReducer = combineReducers({ recipes });

export default rootReducer;