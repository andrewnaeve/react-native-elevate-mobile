import React, { Component } from 'react';
import { LineaMPos } from 'react-native-linea';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { assetNotReady } from '../../../redux/actions/assetNotReady';
import { assetReady } from '../../../redux/actions/assetReady';
import { appReady } from '../../../redux/actions/appReady';
import { lineaConnected } from '../../../redux/actions/lineaConnected';
import ElevateIcon from '../components/ElevateIcon';
import PulseIcon from '../components/PulseIcon';

class TagWriter extends Component {
	constructor() {
		super();
		this.mpos = new LineaMPos();
		this.mpos.addConnectionStateListener(this.lineaConnectionStateListener);
	}

	render() {
		const { navigation } = this.props;
		return <View style={styles.container} />;
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

const mapStateToProps = ({ balance }) => {
	return { balance };
};

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators(
// 		{ assetNotReady, assetReady, appReady, lineaConnected },
// 		dispatch
// 	);
// };

export default connect(mapStateToProps, null)(TagWriter);
