import React, { Component } from 'react';
import { LineaMPos } from 'react-native-linea';
import { Animated, Easing, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { lineaConnected } from '../../redux/actions/lineaConnected';
import { width } from '../../utils/styleConstants';

class LineaStatus extends Component {
	constructor() {
		super();
		this.alertAnimation = new Animated.Value(0);
		this.textOpacity = new Animated.Value(0);
	}

	componentWillReceiveProps(nextProps, nextState) {
		const { lineaStatus } = this.props;
		const { loadingAnimationComplete } = nextProps;
		const nextStatus = nextProps.lineaStatus;
		if (lineaStatus !== nextProps.lineaStatus) {
			loadingAnimationComplete && this.showAlert();
		}
	}

	showAlert = () => {
		const { lineaStatus } = this.props;
		this.alertAnimation.setValue(0);
		this.textOpacity.setValue(0);
		Animated.stagger(2000, [
			Animated.parallel([
				Animated.timing(this.alertAnimation, {
					toValue: 25,
					duration: 300,
					easing: Easing.easeInBounce
				}),
				Animated.timing(this.textOpacity, {
					toValue: 1,
					duration: 300
				})
			]),
			Animated.parallel([
				Animated.timing(this.alertAnimation, {
					toValue: 0,
					duration: 300,
					easing: Easing.easeOutBounce
				}),
				Animated.timing(this.textOpacity, {
					toValue: 0,
					duration: 300
				})
			])
		]).start();
	};

	render() {
		const { lineaStatus } = this.props;
		const backgroundColor = lineaStatus === 'connected' ? 'green' : 'red';
		const drawer = this.alertAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const opacity = this.textOpacity.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		return (
			<Animated.View
				style={[
					styles.linea,
					{ height: drawer },
					{ backgroundColor: backgroundColor }
				]}
			>
				<Animated.Text style={[styles.text, { opacity: opacity }]}>
					{lineaStatus}
				</Animated.Text>
			</Animated.View>
		);
	}
}
//<Text style={[styles.text]}>{lineaStatus}</Text>
const styles = StyleSheet.create({
	linea: {
		position: 'absolute',
		top: 20,
		left: 0,
		right: 0,
		height: 0,
		width: width,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1
	},
	text: {
		backgroundColor: 'transparent'
	}
});

const mapStateToProps = ({ lineaStatus, loadingAnimationComplete }) => {
	return { lineaStatus, loadingAnimationComplete };
};

export default connect(mapStateToProps)(LineaStatus);
