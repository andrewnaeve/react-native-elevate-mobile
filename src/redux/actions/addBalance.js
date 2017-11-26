export const ADD_BALANCE = 'ADD_BALANCE';

export const addBalance = amount => {
	return dispatch => {
		dispatch({ type: ADD_BALANCE, payload: amount });
	};
};
