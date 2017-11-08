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
		this.linea.addConnectionStateListener(this.connectionStateListener);
		this.linea.addDebugListener(this.debugCallback);
	}

	componentWillUnmount() {
		const {
			navigation: { state: { params: { resetPressCount } } }
		} = this.props;
		resetPressCount();
	}

	connect = () => {
		this.linea.initialize();
	};

	connectionStateListener = data => {
		console.log('connection state listenerz', data);
	};

	debugCallback = bug => {
		console.log('bug', bug);
	};

	add = () => {
		console.log('scan');
		this.linea.scanRf();
	};

	rfCardInfoListener(data) {}

	debugListener(data) {}

	magneticInfoListener(data) {}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.body} />
				<Button
					raised
					large
					buttonStyle={{
						backgroundColor: '#ffcc88',
						borderRadius: 10
					}}
					style={styles.scanButton}
					icon={{
						name: 'settings-remote',
						type: 'MaterialIcons'
					}}
					title="connect"
					onPress={this.connect}
				/>
				<Button
					raised
					large
					buttonStyle={{
						backgroundColor: '#ffcc66',
						borderRadius: 10
					}}
					style={styles.scanButton}
					icon={{
						name: 'settings-remote',
						type: 'MaterialIcons'
					}}
					title="Add"
					onPress={this.add}
				/>
			</View>
		);
	}
}

export default Linea;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	body: {
		flex: 1,
		justifyContent: 'center'
	},
	scanButton: {
		justifyContent: 'flex-end',
		alignSelf: 'center',
		marginBottom: 20
	}
});
