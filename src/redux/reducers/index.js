import { combineReducers } from 'redux';
import { assetsLoaded } from './assetsLoaded';
import { appIsReady } from './appIsReady';
import { cart } from './cartReducer';

const rootReducer = combineReducers({
	assetsLoaded,
	appIsReady,
	cart
});

export default rootReducer;
