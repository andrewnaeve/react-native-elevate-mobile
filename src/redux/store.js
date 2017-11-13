import { createStore, compose, applyMiddleware } from 'redux';
import { Platform } from 'react-native';
import initialState from './initialState';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import devToolsEnhancer from 'remote-redux-devtools';
import Reactotron from 'reactotron-react-native';

// const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const store = Reactotron.createStore(
	rootReducer,
	initialState,
	applyMiddleware(thunk)
);

export default store;
