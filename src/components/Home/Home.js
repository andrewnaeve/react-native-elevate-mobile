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

class Home extends Component {
	constructor() {
		super();
		this.animateElevate = new Animated.Value(1);
		this.animatePulse = new Animated.Value(1);
		this.opaqueAnimation = new Animated.Value(1);
	}

	componentWillReceiveProps(nextProps) {
		const { assetsLoaded } = nextProps;
		const { elevate, pulse } = assetsLoaded;
		elevate && pulse && this.props.appReady();
	}

	handleElevateLoad = () => {
		this.props.assetReady('elevate');
	};

	handleElevatePress = () => {
		Animated.timing(this.animateElevate, {
			toValue: 0.85,
			duration: 100,
			easing: Easing.ease
		}).start();
	};

	handleElevateRelease = () => {
		Animated.timing(this.animateElevate, {
			toValue: 1,
			duration: 100,
			easing: Easing.ease
		}).start(() => this.props.navigation.navigate('Elevate'));
	};

	handlePulseLoad = () => {
		this.props.assetReady('pulse');
	};

	handlePulsePress = () => {
		Animated.timing(this.animatePulse, {
			toValue: 0.85,
			duration: 100,
			easing: Easing.ease
		}).start();
	};

	handlePulseRelease = () => {
		Animated.timing(this.animatePulse, {
			toValue: 1,
			duration: 100,
			easing: Easing.ease
		}).start(() => this.props.navigation.navigate('PulseReader'));
	};

	render() {
		const animateElevate = this.animateElevate.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const animatePulse = this.animatePulse.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});

		return (
			<View style={styles.container}>
				<View style={styles.elevate}>
					<TouchableWithoutFeedback
						onPressIn={this.handleElevatePress}
						onPressOut={this.handleElevateRelease}
					>
						<Animated.Image
							source={require('../../img/elevate.png')}
							onLoad={this.handleElevateLoad}
							style={{
								transform: [{ scale: animateElevate }]
							}}
						/>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.pulse}>
					<TouchableWithoutFeedback
						onPressIn={this.handlePulsePress}
						onPressOut={this.handlePulseRelease}
					>
						<Animated.Image
							source={require('../../img/pulse.png')}
							onLoad={this.handlePulseLoad}
							style={{
								transform: [{ scale: animatePulse }]
							}}
						/>
					</TouchableWithoutFeedback>
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
	elevate: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		height: 160,
		width: 160
	},
	pulse: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		height: 160,
		width: 160
	}
});

const mapStateToProps = ({ assetsLoaded }) => {
	return { assetsLoaded };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ unloadAsset, assetReady, appReady }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
