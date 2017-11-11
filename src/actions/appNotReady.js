export const APP_NOT_READY = 'APP_NOT_READY';

export const appNotReady = () => {
	return dispatch => {
		dispatch({ type: APP_NOT_READY });
	};
};
