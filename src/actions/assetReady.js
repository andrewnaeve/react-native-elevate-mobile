export const ASSET_READY = 'ASSET_READY';

export const assetReady = img => {
	return dispatch => {
		dispatch({ type: ASSET_READY, payload: img });
	};
};
