import React, { Component } from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Animated,
	Easing,
	StyleSheet
} from 'react-native';

class Pulse extends Component {
	constructor() {
		super();
		this.state = {
			presses: 0
		};
		this.animatePulse = new Animated.Value(1);
	}

	componentDidUpdate() {
		const { presses } = this.state;
		const { navigation: { navigate } } = this.props;
		presses === 1 &&
			navigate('Pulse', {
				resetPressCount: this.resetPressCount
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
		Animated.timing(this.animatePulse, {
			toValue: 1,
			duration: 100,
			easing: Easing.ease
		}).start(() => this.navigateOnFirstPressOnly());
	};

	handleLoad = () => {
		const { handleLoad } = this.props;
		handleLoad();
	};

	resetPressCount = () => {
		this.setState({
			presses: 0
		});
	};

	navigateOnFirstPressOnly = () => {
		this.setState((prevState, props) => ({
			presses: prevState.presses + 1
		}));
	};

	render() {
		const animatePulse = this.animatePulse.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		return (
			<View style={styles.pulse}>
				<TouchableWithoutFeedback
					onPressIn={this.handlePulsePress}
					onPressOut={this.handlePulseRelease}
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
