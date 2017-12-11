import React, { Component } from 'react';
import { LineaMPos } from 'react-native-linea';
import {
	AlertIOS,
	View,
	TouchableWithoutFeedback,
	StyleSheet,
	Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { height, width } from '../../../utils/styleConstants';
import { Button } from 'react-native-elements';

class ReadNFC extends Component {
	constructor() {
		super();
		this.mpos = new LineaMPos();
		this.rfListener = this.mpos.addRfCardDetectedListener(
			this.rfCardDetectedListener
		);
		this.read = this.mpos.addReadListener(this.readListener);
	}

	componentDidMount() {
		this.mpos.deinitializeEmv();
		this.mpos.initRf();
	}

	componentWillUnmount() {
		console.log('unmounted');
		this.rfListener.remove();
		this.read.remove();
	}

	rfCardDetectedListener = data => {
		const { balance } = this.props;
		this.mpos.readRf();
	};

	readListener = data => {
		this.mpos.closeRf();
		const hex = data.slice(1, data.length - 1);
		let str = '';
		for (var i = 0; i < hex.length; i += 2) {
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		}
		AlertIOS.alert(`Remaining Balance`, `You have $${str} left!`, [
			{
				text: 'Ok',
				onPress: () => console.log('Ok')
			}
		]);
	};

	write = () => {
		const { balance } = this.props;
		const stringBalance = balance.toString();
		this.mpos.writeRf(stringBalance);
	};

	render() {
		const { navigation: { navigate } } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.body}>
					<Text style={styles.text}>
						Tap wristband to read balance
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	body: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		fontSize: 20
	},
	button: {
		marginBottom: 20,
		backgroundColor: '#954646',
		borderRadius: 10
	}
});

const mapStateToProps = ({ balance }) => {
	return { balance };
};

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators(
// 		{ assetNotReady, assetReady, appReady, lineaConnected },
// 		dispatch
// 	);
// };

export default connect(mapStateToProps)(ReadNFC);
