import React, { Component } from 'react';
import { LineaMPos } from 'react-native-linea';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
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
		this.mpos.initRf();
	}

	rfCardDetectedListener = data => {
		console.log(data);
	};

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Button
					raised
					large
					buttonStyle={{
						backgroundColor: '#954646',
						borderRadius: 10
					}}
					style={styles.scanButton}
					icon={{ name: 'settings-remote', type: 'MaterialIcons' }}
					title="Write Credentials to Card"
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
	}
});

const mapStateToProps = ({ assetsReady, loadingAnimationComplete }) => {
	return { assetsReady, loadingAnimationComplete };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{ assetNotReady, assetReady, appReady, lineaConnected },
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteNFC);
