import React, { Component } from 'react';
import { Animated, Text, Modal, StyleSheet, View, Easing } from 'react-native';
import { connect } from 'react-redux';
import { width, height } from '../utils/styleConstants';
import PresentCardModal from './PresentCardModal';
import SuccessModal from './SuccessModal';

class Overlay extends Component {
	constructor() {
		super();
		this.state = {
			slide: 0,
			hide: true
		};
		this.presentCard = new Animated.Value(500);
	}
	handleModalLoad = () => {
		this.setState({
			hide: false
		});
	};
	componentDidUpdate(prevProps, prevState) {
		console.log('did update');
		const { hide } = this.state;
		if (!hide) {
			this.slideIn();
		}
	}
	slideIn = () => {
		this.presentCard.setValue(500);
		Animated.spring(this.presentCard, {
			toValue: 0,
			friction: 7,
			tension: 50,
			useNativeDriver: true
		}).start(() => {
			// this.slideOut();
		});
	};
	slideOut = () => {
		this.presentCard.setValue(0);
		Animated.spring(this.presentCard, {
			toValue: -500,
			friction: 7,
			tension: 50,
			useNativeDriver: true
		}).start(() =>
			this.setState({
				hide: true
			})
		);
	};
	render() {
		const { showModal } = this.props;
		const { hide } = this.state;
		return (
			<Modal
				visible={true}
				animationType="fade"
				transparent={true}
				onShow={this.handleModalLoad}
			>
				<View style={styles.wrapper}>
					<View style={styles.Modal} />
					<Animated.View
						style={[
							{
								transform: [{ translateY: this.presentCard }]
							},
							hide && styles.hide
						]}
					>
						<SuccessModal />
					</Animated.View>
				</View>
			</Modal>
		);
	}
}

const mapStateToProps = ({ showModal }) => {
	return { showModal };
};

export default connect(mapStateToProps)(Overlay);

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	Modal: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'black',
		opacity: 0.8
	},
	hide: {
		display: 'none'
	}
});
