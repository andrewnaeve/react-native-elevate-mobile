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
import { unmountAsset } from '../../actions/unmountAsset';
import { assetReady } from '../../actions/assetReady';
import { appReady } from '../../actions/appReady';
import ElevateIcon from './ElevateIcon';
import PulseIcon from './PulseIcon';

class Home extends Component {
	componentWillReceiveProps(nextProps) {
		const { assetsLoaded: { elevate, pulse } } = nextProps;
		const { appReady } = this.props;
		elevate && pulse && appReady();
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

const mapStateToProps = ({ assetsLoaded }) => {
	return { assetsLoaded };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ unmountAsset, assetReady, appReady }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
