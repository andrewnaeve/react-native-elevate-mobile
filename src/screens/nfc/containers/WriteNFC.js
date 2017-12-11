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

class WriteNFC extends Component {
	constructor() {
		super();
		this.mpos = new LineaMPos();
		this.cl = this.mpos.addRfCardDetectedListener(
			this.rfCardDetectedListener
		);
		this.writeToCard = this.writeToCard.bind(this);
	}

	componentDidMount() {
		this.mpos.deinitializeEmv();
		this.mpos.initRf();
	}

	componentWillUnmount() {
		console.log('unmounted');
		this.mpos.closeRf();
		this.cl.remove();
	}

	async writeToCard() {
		const { balance } = this.props;
		const stringBalance = balance.toString();

		await this.mpos.writeRf(stringBalance);
		this.mpos.closeRf();
	}
	rfCardDetectedListener = data => {
		const { balance } = this.props;
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
					text: 'Write',
					onPress: () => this.writeToCard()
				}
			]
		);
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
					<Text style={styles.text}>Tap wristband to load</Text>
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

export default connect(mapStateToProps)(WriteNFC);
