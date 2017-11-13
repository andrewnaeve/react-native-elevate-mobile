export const LINEA_CONNECTED = 'LINEA_CONNECTED';

export const lineaConnected = connected => {
	return dispatch => {
		dispatch({ type: LINEA_CONNECTED, payload: connected });
	};
};
