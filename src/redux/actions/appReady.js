export const APP_READY = 'APP_READY';

export const appReady = () => {
	return dispatch => {
		dispatch({ type: APP_READY });
	};
};
