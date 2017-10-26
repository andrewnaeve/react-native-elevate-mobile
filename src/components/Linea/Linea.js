import LineaPro from 'react-native-linea';
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Linea extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: `Elevate`
	});
	constructor() {
		super();
		this.linea = new LineaPro();
	}

	componentDidMount() {
		this.linea.initialize();
		this.linea.addConnectionStateListener(this.connectionStateListener);
	}

	startListener = () => {
		console.log('done');
	};

	connectionStateListener = data => {
		console.log('connection state listener', data);
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
					title="Activate Callback"
					onPress={this.connectionStateListener}
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
					title="Start Listener"
					onPress={this.startListener}
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
