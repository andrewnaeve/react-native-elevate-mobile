import { createStore, compose, applyMiddleware } from 'redux';
import initialState from './initialState';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	compose(
// 		applyMiddleware(thunk),
// 		typeof window === 'object' &&
// 		typeof window.devToolsExtension !== 'undefined'
// 			? window.devToolsExtension()
// 			: f => f
// 	)
// );

export default store;
