export const LOADING_ANIMATION_COMPLETE = 'LOADING_ANIMATION_COMPLETE';

export const loadingAnimationComplete = complete => {
	return dispatch => {
		dispatch({ type: LOADING_ANIMATION_COMPLETE, payload: complete });
	};
};
