import React, { Component } from 'react';
import base64 from 'base-64';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { height, width } from '../../../utils/styleConstants';
import { Button } from 'react-native-elements';

export default class PulseReader extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: `Pulse`
	});
	constructor() {
		super();
		this.state = {
			message: ''
		};
		this.linea = new LineaPro();
		this.linea.addConnectionStateListener(this.connectionStateListener);
		this.linea.addDebugListener(this.debugListener);
		this.linea.addEmvTransactionStartedListener(
			this.transactionStartedListener
		);
		this._isMounted = true;
	}

	componentDidMount() {
		this.linea.initializeEmv();
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	startTransaction = () => {
		this.linea.startEmvTransaction();
	};

	cancelTransaction = () => {
		this.linea.cancelEmvTransaction();
	};

	transactionStartedListener = data => {
		console.log(data);
	};

	debugListener = data => {
		console.log('data', data);
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.body}>
					<Text style={styles.message}>{this.state.message}</Text>
				</View>
				<Button
					raised
					large
					buttonStyle={{
						backgroundColor: '#954646',
						borderRadius: 10
					}}
					style={styles.scanButton}
					icon={{ name: 'settings-remote', type: 'MaterialIcons' }}
					title="Start Transaction"
					onPress={this.startTransaction}
				/>
				<Button
					raised
					large
					buttonStyle={{
						backgroundColor: '#954646',
						borderRadius: 10
					}}
					style={styles.scanButton}
					icon={{ name: 'settings-remote', type: 'MaterialIcons' }}
					title="Cancel Transaction"
					onPress={this.cancelTransaction}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	body: {
		flex: 1,
		justifyContent: 'center'
	},
	message: {
		justifyContent: 'center',
		alignSelf: 'center',
		color: '#954646',
		fontSize: 20
	},
	result: {
		justifyContent: 'center',
		alignSelf: 'center'
	},
	scanButton: {
		justifyContent: 'flex-end',
		alignSelf: 'center',
		marginBottom: 20
	}
});
