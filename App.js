import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { HomeScreen } from './src/nav/router';
import Loading from './src/screens/loading/Loading';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { LineaMPos } from 'react-native-linea';
import LineaStatus from './src/screens/loading/LineaStatus';
import ComposedApp from './src/ComposedApp';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ComposedApp />
			</Provider>
		);
	}
}
