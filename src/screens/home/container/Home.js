import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { LineaMPos } from 'react-native-linea';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { assetNotReady } from '../../../redux/actions/assetNotReady';
import { assetReady } from '../../../redux/actions/assetReady';
import { appReady } from '../../../redux/actions/appReady';
import { lineaConnected } from '../../../redux/actions/lineaConnected';
import ElevateIcon from '../components/ElevateIcon';
import PulseIcon from '../components/PulseIcon';

class Home extends Component {
	constructor() {
		super();
		this.mpos = new LineaMPos();
		this.mpos.addConnectionStateListener(this.lineaConnectionStateListener);
		this._isMounted = true;
	}

	componentDidMount() {
		this.mpos.connect();
	}

	componentWillUnmount() {
		const { assetNotReady } = this.props;
		assetNotReady('elevate');
		assetNotReady('pulse');
	}

	componentWillReceiveProps(nextProps) {
		const { assetsReady: { elevate, pulse } } = nextProps;
		const { appReady } = this.props;
		elevate && pulse && appReady(true);
	}

	lineaConnectionStateListener = data => {
		const { lineaConnected } = this.props;
		lineaConnected(data);
	};

	handleElevateLoad = () => {
		const { assetReady } = this.props;
		assetReady('elevate');
	};

	handlePulseLoad = () => {
		const { assetReady } = this.props;
		assetReady('pulse');
	};

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<ElevateIcon
					handleLoad={this.handleElevateLoad}
					navigation={navigation}
				/>
				<PulseIcon
					handleLoad={this.handlePulseLoad}
					navigation={navigation}
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

const mapStateToProps = ({ assetsReady }) => {
	return { assetsReady };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{ assetNotReady, assetReady, appReady, lineaConnected },
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
