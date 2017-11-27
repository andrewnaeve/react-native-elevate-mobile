export const LAUNCH_MODAL = 'LAUNCH_MODAL';

export const launchModal = show => {
	return dispatch => {
		dispatch({ type: LAUNCH_MODAL, payload: show });
	};
};
