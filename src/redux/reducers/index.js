import { assetsReady } from './assetsReadyReducer';
import { appIsReady } from './appIsReadyReducer';
import { lineaStatus } from './lineaStatusReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	assetsReady,
	appIsReady,
	lineaStatus
});

export default rootReducer;
