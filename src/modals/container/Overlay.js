import React, { Component } from 'react';
import { Animated, Text, Modal, StyleSheet, View, Easing } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { width, height } from '../../utils/styleConstants';
import PresentCardModal from '../components/PresentCardModal';
import SuccessModal from '../components/SuccessModal';
import { cardInserted } from '../../redux/actions/cardInserted';
import { launchModal } from '../../redux/actions/modal';

class Overlay extends Component {
	constructor() {
		super();
		this.state = {
			slide: 0,
			hide: true
		};
		this.presentCard = new Animated.Value(500);
		this.slides = ['PresentCard', 'Success'];
	}
	componentWillReceiveProps(nextProps) {
		const { transactionSuccess } = nextProps;
		if (
			transactionSuccess === true &&
			transactionSuccess !== this.props.transactionSuccess
		) {
			this.slideOut();
		}
	}
	componentDidUpdate(prevProps, prevState) {
		const { hide, slide } = this.state;
		if (!hide && prevState.hide !== hide) {
			this.slideIn();
		}
		if (slide !== prevState.slide) {
			this.setState({ hide: false });
		}
	}
	handleModalLoad = () => {
		this.setState({
			hide: false
		});
	};
	slideIn = () => {
		this.presentCard.setValue(500);
		Animated.spring(this.presentCard, {
			toValue: 0,
			friction: 7,
			tension: 50,
			useNativeDriver: true
		}).start();
	};
	slideOut = () => {
		this.presentCard.setValue(0);
		Animated.spring(this.presentCard, {
			toValue: -500,
			friction: 7,
			tension: 50,
			useNativeDriver: true
		}).start(() => this.handleTransition());
	};
	handleTransition = () => {
		if (this.props.transactionSuccess === true) {
			this.setState({
				hide: true,
				slide: 1
			});
		}
	};
	closeModal = () => {
		const { launchModal, navigation: { navigate } } = this.props;
		this.setState({
			slide: 0,
			hide: true
		});
		launchModal(false);
		navigate('Write');
	};
	render() {
		const { showModal, cardInserted, navigation } = this.props;
		const { slide, hide } = this.state;
		return (
			<Modal
				visible={showModal}
				animationType="fade"
				transparent={true}
				onShow={this.handleModalLoad}
			>
				<View style={styles.wrapper}>
					<View style={styles.Modal} />
					{this.slides[slide] === 'PresentCard' && (
						<Animated.View
							style={[
								{
									transform: [
										{ translateY: this.presentCard }
									]
								},
								hide && styles.hide
							]}
						>
							<PresentCardModal cardInserted={cardInserted} />
						</Animated.View>
					)}
					{this.slides[slide] === 'Success' && (
						<Animated.View
							style={[
								{
									transform: [
										{ translateY: this.presentCard }
									]
								},
								hide && styles.hide
							]}
						>
							<SuccessModal
								currentSlide={slide}
								closeModal={this.closeModal}
							/>
						</Animated.View>
					)}
				</View>
			</Modal>
		);
	}
}

const mapStateToProps = ({
	checkout: { showModal, cardInserted, transactionSuccess }
}) => {
	return { showModal, cardInserted, transactionSuccess };
};
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ launchModal }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Overlay);

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
