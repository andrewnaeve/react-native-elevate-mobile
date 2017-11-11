export const ASSET_READY = 'ASSET_READY';

export const assetReady = asset => {
	return dispatch => {
		dispatch({ type: ASSET_READY, payload: asset });
	};
};
