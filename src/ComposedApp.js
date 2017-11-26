import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { HomeScreen } from './nav/router';
import Loading from './screens/loading/Loading';
import { LineaMPos } from 'react-native-linea';
import LineaStatus from './screens/loading/LineaStatus';
import Overlay from './utils/Overlay';

export default class ComposedApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LineaStatus />
				<HomeScreen />
				<Loading />
				<Overlay />
			</View>
		);
	}
}

// const mapStateToProps = ({ assetsReady, loadingAnimationComplete }) => {
// 	return { assetsReady, loadingAnimationComplete };
// };

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators(
// 		{ assetNotReady, assetReady, appReady, lineaConnected },
// 		dispatch
// 	);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ComposedApp);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	statusBar: {
		height: 25
	}
});
