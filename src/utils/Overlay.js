import React, { Component } from 'react';
import { Animated, Text, Modal, StyleSheet, View, Easing } from 'react-native';
import { connect } from 'react-redux';
import { width, height } from './styleConstants';

export default class Overlay extends Component {
	render() {
		const { showOverlay } = this.props;
		return (
			<Modal visible={true} animationType="fade" transparent={true}>
				<View style={styles.overlay} />
			</Modal>
		);
	}
}

const mapStateToProps = ({ showOverlay }) => {
	return { showOverlay };
};

//export default connect(mapStateToProps)(Overlay);

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'black',
		opacity: 0.8
	}
});
