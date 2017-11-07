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

class Pulse extends Component {
	constructor() {
		super();
		this.state = {
			disabled: false
		};
		this.animatePulse = new Animated.Value(1);
	}

	componentDidUpdate() {
		const { disabled } = this.state;
		const { resetDisabled, navigation: { navigate } } = this.props;
		disabled &&
			navigate('PulseReader', {
				resetDisabled: resetDisabled
			});
	}

	handlePulsePress = () => {
		Animated.timing(this.animatePulse, {
			toValue: 0.85,
			duration: 100,
			easing: Easing.ease
		}).start();
	};

	handlePulseRelease = () => {
		const { disableButton } = this.props;
		Animated.timing(this.animatePulse, {
			toValue: 1,
			duration: 100,
			easing: Easing.ease
		}).start(() => disableButton());
	};

	handleLoad = () => {
		const { handleLoad } = this.props;
		handleLoad();
	};

	render() {
		const animatePulse = this.animatePulse.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const { handleLoad } = this.props;
		const { disabled } = this.state;

		return (
			<View style={styles.pulse}>
				<TouchableWithoutFeedback
					onPressIn={this.handlePulsePress}
					onPressOut={this.handlePulseRelease}
					disable={disabled}
				>
					<Animated.Image
						source={require('../../img/pulse.png')}
						onLoad={this.handleLoad}
						style={{
							transform: [{ scale: animatePulse }]
						}}
					/>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

export default Pulse;

const styles = StyleSheet.create({
	pulse: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		height: 160,
		width: 160
	}
});
