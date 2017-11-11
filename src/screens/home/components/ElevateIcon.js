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
		this.animateElevate = new Animated.Value(1);
	}

	handleElevatePress = () => {
		Animated.timing(this.animateElevate, {
			toValue: 0.85,
			duration: 100,
			easing: Easing.ease
		}).start();
	};

	handleElevateRelease = () => {
		const { navigation: { navigate } } = this.props;
		Animated.timing(this.animateElevate, {
			toValue: 1,
			duration: 100,
			easing: Easing.ease
		}).start(() => navigate('Elevate'));
	};

	handleLoad = () => {
		const { handleLoad } = this.props;
		handleLoad();
	};

	render() {
		const animateElevate = this.animateElevate.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		return (
			<View style={styles.elevate}>
				<TouchableWithoutFeedback
					onPressIn={this.handleElevatePress}
					onPressOut={this.handleElevateRelease}
				>
					<Animated.Image
						source={require('../../../img/elevate.png')}
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
