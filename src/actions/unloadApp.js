export const UNLOAD_APP = 'UNLOAD_APP';

export const unloadApp = () => {
	return dispatch => {
		dispatch({ type: UNLOAD_APP });
	};
};
