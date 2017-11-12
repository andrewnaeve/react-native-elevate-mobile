import { ASSET_READY } from '../actions/assetReady';
import { ASSET_NOT_READY } from '../actions/assetNotReady';

import initialState from '../initialState';

export const assetsReady = (state = initialState.assetsReady, action) => {
	const asset = action.payload;
	switch (action.type) {
		case ASSET_READY:
			return {
				...state,
				[asset]: true
			};
		case ASSET_NOT_READY:
			return {
				...state,
				[asset]: false
			};
		default:
			return state;
	}
};
