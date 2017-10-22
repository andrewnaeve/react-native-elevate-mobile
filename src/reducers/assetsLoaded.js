import { ASSET_READY } from '../actions/assetReady';
import { UNLOAD_ASSET } from '../actions/unloadAsset';

import initialState from '../initialState';

export const assetsLoaded = (state = initialState.assetsLoaded, action) => {
	const img = action.payload;
	switch (action.type) {
		case ASSET_READY:
			return {
				...state,
				[img]: true
			};
		case UNLOAD_ASSET:
			return {
				...state,
				[img]: false
			};
		default:
			return state;
	}
};
