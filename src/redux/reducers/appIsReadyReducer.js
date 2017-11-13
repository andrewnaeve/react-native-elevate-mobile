import { APP_READY } from '../actions/appReady';
import initialState from '../initialState';

export const appIsReady = (state = initialState.appIsReady, action) => {
	const ready = action.payload;
	switch (action.type) {
		case APP_READY:
			return ready;
		default:
			return state;
	}
};
