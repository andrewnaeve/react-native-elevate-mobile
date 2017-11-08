import React, { Component } from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Animated,
	Easing,
	StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unloadAsset } from '../../actions/unloadAsset';
import { assetReady } from '../../actions/assetReady';
import { appReady } from '../../actions/appReady';
import Elevate from './Elevate';
import Pulse from './Pulse';

class Home extends Component {
	componentWillReceiveProps(nextProps) {
		const { assetsLoaded } = nextProps;
		const { elevate, pulse } = assetsLoaded;
		elevate && pulse && this.props.appReady();
	}

	handleElevateLoad = () => {
		this.props.assetReady('elevate');
	};

	handlePulseLoad = () => {
		this.props.assetReady('pulse');
	};

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Elevate
					handleLoad={this.handleElevateLoad}
					navigation={navigation}
				/>
				<Pulse
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

const mapStateToProps = ({ assetsLoaded }) => {
	return { assetsLoaded };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ unloadAsset, assetReady, appReady }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
