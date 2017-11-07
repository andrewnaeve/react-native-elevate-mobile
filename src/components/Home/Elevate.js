import React, { Component } from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Animated,
	Easing,
	StyleSheet
} from 'react-native';

class Elevate extends Component {
	constructor() {
		super();
		this.state = {
			disabled: false
		};
		this.animateElevate = new Animated.Value(1);
	}

	componentDidUpdate() {
		const { disabled } = this.state;
		const { resetDisabled, navigation: { navigate } } = this.props;
		if (this.state.disabled === true) {
			console.log('the button is disabled');
			navigate('Elevate', {
				resetDisabled: this.resetDisabled
			});
		}
	}

	handleElevatePress = () => {
		Animated.timing(this.animateElevate, {
			toValue: 0.85,
			duration: 100,
			easing: Easing.ease
		}).start();
	};

	handleElevateRelease = () => {
		const { disableButton } = this.props;
		Animated.timing(this.animateElevate, {
			toValue: 1,
			duration: 100,
			easing: Easing.ease
		}).start(() => this.disableButton());
	};

	handleLoad = () => {
		const { handleLoad } = this.props;
		handleLoad();
	};

	resetDisabled = () => {
		this.setState({
			disabled: false
		});
	};

	disableButton = () => {
		this.setState({
			disabled: true
		});
	};

	render() {
		const animateElevate = this.animateElevate.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const { handleLoad } = this.props;
		const { disabled } = this.state;

		return (
			<View style={styles.elevate}>
				<TouchableWithoutFeedback
					onPressIn={this.handleElevatePress}
					onPressOut={this.handleElevateRelease}
					disabled={disabled}
				>
					<Animated.Image
						source={require('../../img/elevate.png')}
						onLoad={this.handleLoad}
						style={{
							transform: [{ scale: animateElevate }]
						}}
					/>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

export default Elevate;

const styles = StyleSheet.create({
	elevate: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		height: 160,
		width: 160
	}
});
