import React, { Component } from 'react';
import { LineaPro, LineaMPos } from 'react-native-linea';
import { Animated, Easing, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { lineaConnected } from '../../redux/actions/lineaConnected';
import { width } from '../../utils/styleConstants';

class LineaStatus extends Component {
	constructor() {
		super();
		this.mpos = new LineaMPos();
		this.mpos.addConnectionStateListener(this.lineaConnectionStateListener);
		this.drawerAnimation = new Animated.Value(0);
	}

	componentDidMount() {
		this.mpos.connect();
	}

	lineaConnectionStateListener = data => {
		console.log('data', data);
		const { lineaConnected } = this.props;
		lineaConnected(data);
	};

	componentDidMount() {
		this.openDrawer();
	}

	componentWillReceiveProps(nextProps) {
		const { lineaStatus } = this.props;
		console.log('ls', lineaStatus, nextProps.lineaStatus);
		if (lineaStatus !== nextProps.lineaStatus) {
			console.log('close it');
			this.closeDrawer();
		}
	}

	openDrawer = () => {
		this.drawerAnimation.setValue(0);
		Animated.timing(this.drawerAnimation, {
			toValue: 25,
			duration: 1000,
			easing: Easing.ease
		}).start();
	};

	closeDrawer = () => {
		this.drawerAnimation.setValue(25);
		Animated.timing(this.drawerAnimation, {
			toValue: 0,
			duration: 1000,
			easing: Easing.ease
		}).start(() => this.openDrawer);
	};

	render() {
		const { lineaStatus } = this.props;
		console.log('prop', this.props);
		const backgroundColor = lineaStatus === 'connected' ? 'green' : 'red';
		const hidden = lineaStatus === 'connected';
		const drawer = this.drawerAnimation.interpolate({
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
				<Text>Disconnected</Text>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	linea: {
		position: 'absolute',
		zIndex: 1,
		top: 20,
		left: 0,
		right: 0,
		width: width,
		height: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const mapStateToProps = ({ lineaStatus }) => {
	return { lineaStatus };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ lineaConnected }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LineaStatus);
