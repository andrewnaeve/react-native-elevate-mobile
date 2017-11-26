import { SHOW_MODAL } from '../actions/modal';

import initialState from '../initialState';

export const showModal = (state = initialState.showModal, action) => {
	const show = action.payload;
	switch (action.type) {
		case SHOW_MODAL:
			return show;
		default:
			return state;
	}
};
