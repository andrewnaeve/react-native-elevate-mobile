import { SHOW_OVERLAY } from '../actions/overlay';

import initialState from '../initialState';

export const showOverlay = (state = initialState.showOverlay, action) => {
	const show = action.payload;
	switch (action.type) {
		case SHOW_OVERLAY:
			return show;
		default:
			return state;
	}
};
