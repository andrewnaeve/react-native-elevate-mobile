export const SHOW_OVERLAY = 'SHOW_OVERLAY';

export const showOverlay = show => {
	return dispatch => {
		dispatch({ type: SHOW_OVERLAY, payload: show });
	};
};
