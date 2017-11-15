import React, { Component } from 'react';
import { LineaPro, LineaMPos } from 'react-native-linea';
import {
	TouchableOpacity,
	StyleSheet,
	View,
	Text,
	AlertIOS
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-native-elements';

class Linea extends Component {
	constructor() {
		super();
		this.mpos = new LineaMPos();
		this.mpos.addDebugListener(this.debugListener);
	}

	componentDidMount() {
		this.mpos.emvInit();
	}

	debugListener = error => {
		console.log('err', error);
	};

	render() {
		const { lineaIsConnected } = this.props;
		const connectionString = lineaIsConnected ? 'True' : 'False';
		const backgroundColor = lineaIsConnected
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

const mapStateToProps = ({ lineaIsConnected }) => {
	return { lineaIsConnected };
};

export default connect(mapStateToProps)(Linea);

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
