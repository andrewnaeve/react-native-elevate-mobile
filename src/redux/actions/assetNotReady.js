export const ASSET_NOT_READY = 'ASSET_NOT_READY';

export const assetNotReady = asset => {
	return dispatch => {
		dispatch({ type: ASSET_NOT_READY, payload: asset });
	};
};
