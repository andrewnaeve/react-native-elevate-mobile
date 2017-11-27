export const TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS';

export const transactionSuccess = success => {
	return dispatch => {
		dispatch({ type: TRANSACTION_SUCCESS, payload: success });
	};
};
