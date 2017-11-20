import { assetsReady } from './assetsReadyReducer';
import { appIsReady } from './appIsReadyReducer';
import { lineaStatus } from './lineaStatusReducer';
import { loadingAnimationComplete } from './loadingAnimationCompleteReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	assetsReady,
	appIsReady,
	lineaStatus,
	loadingAnimationComplete
});

export default rootReducer;
