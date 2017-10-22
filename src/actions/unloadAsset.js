export const UNLOAD_ASSET = 'UNLOAD_ASSET';

export const unloadAsset = img => {
	return dispatch => {
		dispatch({ type: UNLOAD_ASSET, payload: img });
	};
};
