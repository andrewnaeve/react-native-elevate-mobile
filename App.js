import './ReactotronConfig';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeScreen } from './src/nav/router';
import Loading from './src/screens/loading/Loading';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
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
	}
});
