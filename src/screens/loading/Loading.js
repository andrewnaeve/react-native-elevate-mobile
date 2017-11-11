import React, { Component } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Loading extends Component {
	constructor() {
		super();
		this.state = {
			visible: true
		};
		this.zoomAnimation = new Animated.Value(1);
		this.opaqueAnimation = new Animated.Value(1);
	}
	componentDidMount() {}
	componentWillReceiveProps(nextProps) {
		const { appIsReady } = nextProps;
		appIsReady && this.animate();
	}

	animate = () => {
		this.zoomAnimation.setValue(1);
		this.opaqueAnimation.setValue(1);

		Animated.stagger(1000, [
			Animated.timing(this.zoomAnimation, {
				toValue: 0.75,
				duration: 1000,
				easing: Easing.ease
			}),
			Animated.parallel([
				Animated.timing(this.zoomAnimation, {
					toValue: 10,
					duration: 150,
					easing: Easing.ease
				}),
				Animated.timing(this.opaqueAnimation, {
					toValue: 0,
					duration: 150,
					easing: Easing.ease
				})
			])
		]).start(() => this.setState({ visible: false }));
	};

	render() {
		const scale = this.zoomAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});

		const opacity = this.opaqueAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const { visible } = this.state;
		return (
			<View style={visible ? styles.container : styles.hidden}>
				<Animated.Image
					source={require('../../img/shederick.png')}
					style={[
						visible ? null : styles.shrink,
						{ opacity: opacity },
						{ transform: [{ scale: scale }] }
					]}
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ appIsReady }) => {
	return { appIsReady };
};

export default connect(mapStateToProps)(Loading);

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 100,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	hidden: {
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		justifyContent: 'center',
		zIndex: -100
	},
	shrink: {
		width: 0,
		height: 0
	}
});
