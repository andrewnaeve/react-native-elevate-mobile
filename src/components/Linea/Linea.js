import LineaPro from 'react-native-linea';
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Linea extends Component {
	constructor() {
		super();
		this.linea = new LineaPro();
		this.connectionStateListener = this.connectionStateListener.bind(this);
		this.rfCardInfoListener = this.rfCardInfoListener.bind(this);
		this.debugListener = this.debugListener.bind(this);
		this.magneticInfoListener = this.magneticInfoListener.bind(this);
		this.activateScanner = this.activateScanner.bind(this);
	}

	componentDidMount() {
		this.linea.initialize();
		this.linea.addConnectionStateListener(this.connectionStateListener);
		this.linea.addDebugListener(this.debugListener);
		this.linea.addRfCardListener(this.rfCardInfoListener);
		this.linea.addMagneticInfoListener(this.magneticInfoListener);
	}

	activateScanner() {
		this.connectionStateListener();
	}

	connectionStateListener(data) {
		console.log('connection state listener', data);
	}

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
						backgroundColor: '#ffcc66',
						borderRadius: 10
					}}
					style={styles.scanButton}
					icon={{
						name: 'settings-remote',
						type: 'MaterialIcons'
					}}
					title="Activate Card Reader"
					onPress={this.activateScanner}
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
