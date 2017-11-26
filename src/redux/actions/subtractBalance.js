export const SUBTRACT_BALANCE = 'SUBTRACT_BALANCE';

export const subtractBalance = amount => {
	return dispatch => {
		dispatch({ type: SUBTRACT_BALANCE, payload: amount });
	};
};
