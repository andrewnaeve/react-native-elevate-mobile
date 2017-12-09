import React, { Component } from 'react';
import { LineaMPos } from 'react-native-linea';
import {
	AlertIOS,
	View,
	TouchableWithoutFeedback,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { height, width } from '../../../utils/styleConstants';
import { Button } from 'react-native-elements';

class WriteNFC extends Component {
	constructor() {
		super();
		this.mpos = new LineaMPos();
		this.mpos.addRfCardDetectedListener(this.rfCardDetectedListener);
	}

	componentDidMount() {
		this.mpos.deinitializeEmv();
		this.mpos.initRf();
	}

	rfCardDetectedListener = data => {
		const { balance } = this.props;
		const stringBalance = balance.toString();
		console.log('detected', data);
		AlertIOS.alert(
			`Write $${balance}?`,
			`Would you like to add $${balance} to wristband?`,
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{
					text: 'Write Now',
					onPress: () => this.mpos.writeRf(stringBalance)
				}
			]
		);
	};

	write = () => {
		const { balance } = this.props;
		const stringBalance = balance.toString();
		this.mpos.writeRf(stringBalance);
	};

	read = () => {
		this.mpos.readRf();
	};

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.body} />
				<Button
					onPress={this.read}
					raised
					large
					buttonStyle={styles.button}
					style={styles.scanButton}
					icon={{ name: 'settings-remote', type: 'MaterialIcons' }}
					title="Read"
				/>
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
	body: { flex: 1 },
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

export default connect(mapStateToProps)(WriteNFC);
