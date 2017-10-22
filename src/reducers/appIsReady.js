import { APP_READY } from '../actions/appReady';
import { UNLOAD_APP } from '../actions/unloadApp';

import initialState from '../initialState';

export const appIsReady = (state = initialState.appIsReady, action) => {
	const img = action.payload;
	switch (action.type) {
		case APP_READY:
			return {
				appIsReady: true
			};
		case UNLOAD_APP:
			return {
				appIsReady: false
			};
		default:
			return state;
	}
};
