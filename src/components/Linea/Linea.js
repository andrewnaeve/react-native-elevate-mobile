import LineaPro from 'react-native-linea';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

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

	activateScanner() {}

	connectionStateListener(data) {}

	rfCardInfoListener(data) {}

	debugListener(data) {}

	magneticInfoListener(data) {}

	render() {
		return (
			<TouchableOpacity onPress={this.activateScanner}>
				<View>
					<Text>Activate scanner</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

export default Linea;
