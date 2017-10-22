import LineaPro from 'react-native-linea';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
class Test extends React.Component {
	constructor() {
		super();
		this.setState({
			linea: new LineaPro()
		});
		this.connectionStateListener = this.connectionStateListener.bind(this);
		this.rfCardInfoListener = this.rfCardInfoListener.bind(this);
		this.debugListener = this.debugListener.bind(this);
		this.magneticInfoListener = this.magneticInfoListener.bind(this);
		this.activateScanner = this.activateScanner.bind(this);
	}

	componentDidMount() {
		this.state.linea.initialize();

		this.state.linea.addConnectionStateListener(
			this.connectionStateListener
		);
		this.state.linea.addDebugListener(this.debugListener);
		this.state.linea.addRfCardListener(this.rfCardInfoListener);
		this.state.linea.addMagneticInfoListener(this.magneticInfoListener);
	}

	activateScanner() {
		this.state.linea.scanRfId();
	}

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
export default Test;
