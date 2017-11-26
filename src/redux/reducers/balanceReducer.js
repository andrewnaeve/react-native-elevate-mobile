import { ADD_BALANCE } from '../actions/addBalance';
import { SUBTRACT_BALANCE } from '../actions/subtractBalance';

import initialState from '../initialState';

export const balance = (state = initialState.balance, action) => {
	const amount = action.payload;
	switch (action.type) {
		case ADD_BALANCE:
			return state + amount;
		case SUBTRACT_BALANCE:
			return state - amount;
		default:
			return state;
	}
};
