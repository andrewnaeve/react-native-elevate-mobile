export const SHOW_MODAL = 'SHOW_MODAL';

export const showModal = show => {
	return dispatch => {
		dispatch({ type: SHOW_MODAL, payload: show });
	};
};
