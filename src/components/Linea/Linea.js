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
		this.state = {
			connected: false
		};
		this.linea = new LineaPro();
		this.linea.addConnectionStateListener(this.connectionStateListener);
		this.linea.addDebugListener(this.debugCallback);
		this._isMounted = true;
	}

	componentWillUnmount() {
		const {
			navigation: { state: { params: { resetPressCount } } }
		} = this.props;
		resetPressCount();
		this._isMounted = false;
	}

	componentDidMount() {
		this.linea.initialize();
	}

	connectionStateListener = data => {
		if (this._isMounted) {
			data
				? this.setState({ connected: true })
				: this.setState({ connected: false });
		}
	};

	render() {
		const { connected } = this.state;
		const connectionString = connected ? 'True' : 'False';
		const backgroundColor = connected
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

export default Linea;

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
