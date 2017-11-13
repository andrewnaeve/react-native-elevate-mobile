import LineaPro from 'react-native-linea';
import React, { Component } from 'react';
import {
	TouchableOpacity,
	StyleSheet,
	View,
	Text,
	AlertIOS
} from 'react-native';
import { Button } from 'react-native-elements';

class Linea extends Component {
	constructor() {
		super();
		this.linea = new LineaPro();
	}

	render() {
		const { lineaConnected } = this.props;
		const connectionString = lineaConnected ? 'True' : 'False';
		const backgroundColor = lineaConnected
			? styles.containerGreen
			: styles.containerRed;
		return (
			<View style={backgroundColor}>
				<View style={styles.body}>
					<Text style={styles.text}> {connectionString} </Text>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ assetsReady, lineaConnected }) => {
	return { assetsReady, lineaConnected };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{ assetNotReady, assetReady, appReady },
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Linea);

const styles = StyleSheet.create({
	containerRed: {
		flex: 1,
		backgroundColor: 'red'
	},
	containerGreen: {
		flex: 1,
		backgroundColor: 'green'
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white',
		fontSize: 60,
		fontFamily: 'Helvetica Neue'
	},
	scanButton: {
		justifyContent: 'flex-end',
		alignSelf: 'center',
		marginBottom: 20
	}
});
