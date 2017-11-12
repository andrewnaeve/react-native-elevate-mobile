import React, { Component } from 'react';
import base64 from 'base-64';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { NFCNDEFReaderSession } from 'react-native-nfc-ios';
import { height, width } from '../../../utils/styleConstants';
import { Button } from 'react-native-elements';

// currently only working with NDEF formatted wristbands.
// only works on read device not emulator
// TODO: use linea sdk instead
export default class PulseReader extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: `Pulse`
	});
	constructor() {
		super();
		this.state = {
			message: ''
		};
		this.readerSession = null;
	}

	handlePress = async () => {
		const messages = await NFCNDEFReaderSession.readTag({
			alertMessage: 'Place wristband next to reader'
		});
		const payloadB64 = messages[0].records[0].payload;
		const payload = base64.decode(payloadB64);
		this.setState({
			message: payload
		});
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
					title="Scan Wristband"
					onPress={this.handlePress}
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
