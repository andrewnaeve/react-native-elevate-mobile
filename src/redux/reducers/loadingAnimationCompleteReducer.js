import { LOADING_ANIMATION_COMPLETE } from '../actions/loadingAnimationComplete';
import initialState from '../initialState';

export const loadingAnimationComplete = (
	state = initialState.loadingAnimationComplete,
	action
) => {
	switch (action.type) {
		case LOADING_ANIMATION_COMPLETE:
			return action.payload;
		default:
			return state;
	}
};
