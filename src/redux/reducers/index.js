import { assetsReady } from './assetsReadyReducer';
import { appIsReady } from './appIsReadyReducer';
import { lineaIsConnected } from './lineaIsConnectedReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	assetsReady,
	appIsReady,
	lineaIsConnected
});

export default rootReducer;
