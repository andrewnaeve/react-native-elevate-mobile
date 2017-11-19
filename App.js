import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { HomeScreen } from './src/nav/router';
import Loading from './src/screens/loading/Loading';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { LineaMPos } from 'react-native-linea';
import LineaStatus from './src/screens/loading/LineaStatus';

export default class App extends Component {
	render() {
		console.log('hey dude');
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<LineaStatus />
					<HomeScreen />
					<Loading />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	statusBar: {
		height: 25
	}
});
