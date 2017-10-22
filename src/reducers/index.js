import { combineReducers } from 'redux';
import { assetsLoaded } from './assetsLoaded';
import { appIsReady } from './appIsReady';

const rootReducer = combineReducers({
	assetsLoaded,
	appIsReady
});

export default rootReducer;
