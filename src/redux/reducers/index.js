import { assetsReady } from './assetsReadyReducer';
import { appIsReady } from './appIsReadyReducer';
import { lineaConnected } from './lineaConnectedReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	assetsReady,
	appIsReady,
	lineaConnected
});

export default rootReducer;
