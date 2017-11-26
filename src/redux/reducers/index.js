import { combineReducers } from 'redux';
import { assetsReady } from './assetsReadyReducer';
import { appIsReady } from './appIsReadyReducer';
import { lineaStatus } from './lineaStatusReducer';
import { balance } from './balanceReducer';
import { showOverlay } from './overlayReducer';
import { loadingAnimationComplete } from './loadingAnimationCompleteReducer';

const rootReducer = combineReducers({
	assetsReady,
	appIsReady,
	lineaStatus,
	balance,
	loadingAnimationComplete,
	showOverlay
});

export default rootReducer;
