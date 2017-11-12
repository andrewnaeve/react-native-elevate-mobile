import { combineReducers } from 'redux';
import { assetsReady } from './assetsReady';
import { appIsReady } from './appIsReady';
import { cart } from './cartReducer';

const rootReducer = combineReducers({
	assetsReady,
	appIsReady,
	cart
});

export default rootReducer;
