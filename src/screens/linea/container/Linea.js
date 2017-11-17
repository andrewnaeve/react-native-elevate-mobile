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
		this.mpos.addSmartCardInsertedListener(this.cardInsertedListener);
		this.mpos.addTransactionStartedListener(this.transactionListener);
	}

	componentDidMount() {
		this.mpos.initialize();
	}

	initSC = () => {
		this.mpos.initSC();
	};

	debugListener = error => {
		console.log(error);
	};

	cardInsertedListener = data => {
		console.log(data);
	};

	transactionListener = data => {
		console.log(data);
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
					<Text style={styles.text}>{lineaIsConnected}</Text>
					<TouchableOpacity
						onPress={this.initSC}
						style={styles.button}
					/>
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
	button: {
		height: 60,
		width: 150,
		backgroundColor: 'white'
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
