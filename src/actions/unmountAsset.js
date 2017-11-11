export const UNMOUNT_ASSET = 'UNMOUNT_ASSET';

export const unmountAsset = asset => {
	return dispatch => {
		dispatch({ type: UNMOUNT_ASSET, payload: asset });
	};
};
