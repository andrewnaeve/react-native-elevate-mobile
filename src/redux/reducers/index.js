import { combineReducers } from 'redux';
import { assetsReady } from './assetsReadyReducer';
import { appIsReady } from './appIsReadyReducer';
import { lineaStatus } from './lineaStatusReducer';
import { balance } from './balanceReducer';
import { checkout } from './checkoutReducer';
import { loadingAnimationComplete } from './loadingAnimationCompleteReducer';

const rootReducer = combineReducers({
	assetsReady,
	appIsReady,
	lineaStatus,
	balance,
	loadingAnimationComplete,
	checkout
});

export default rootReducer;
