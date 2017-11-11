import { ASSET_READY } from '../actions/assetReady';
import { UNMOUNT_ASSET } from '../actions/unmountAsset';

import initialState from '../initialState';

export const assetsLoaded = (state = initialState.assetsLoaded, action) => {
	const asset = action.payload;
	switch (action.type) {
		case ASSET_READY:
			return {
				...state,
				[asset]: true
			};
		case UNMOUNT_ASSET:
			return {
				...state,
				[asset]: false
			};
		default:
			return state;
	}
};
