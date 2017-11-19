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
import { lineaConnected } from '../../../redux/actions/lineaConnected';

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

	debugListener = error => {
		console.log('error:', error);
	};

	cardInsertedListener = data => {
		console.log(data);
		this.mpos.startTransaction();
	};

	transactionListener = data => {
		console.log('transaction listener', data);
	};

	render() {
		const { lineaStatus } = this.props;
		const connectionString = lineaStatus ? 'True' : 'False';
		const backgroundColor = lineaStatus
			? styles.containerGreen
			: styles.containerRed;
		return (
			<View style={backgroundColor}>
				<View style={styles.body}>
					<Text style={styles.text}>{lineaStatus}</Text>
					<TouchableOpacity
						onPress={this.initSC}
						style={styles.button}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ lineaStatus }) => {
	return { lineaStatus };
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
