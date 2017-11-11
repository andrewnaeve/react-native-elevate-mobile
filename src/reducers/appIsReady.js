import { APP_READY } from '../actions/appReady';
import { APP_NOT_READY } from '../actions/appNotReady';

import initialState from '../initialState';

export const appIsReady = (state = initialState.appIsReady, action) => {
	switch (action.type) {
		case APP_READY:
			return {
				appIsReady: true
			};
		case APP_NOT_READY:
			return {
				appIsReady: false
			};
		default:
			return state;
	}
};
