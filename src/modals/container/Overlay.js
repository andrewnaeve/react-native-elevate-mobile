import React, { Component } from 'react';
import { Animated, Text, Modal, StyleSheet, View, Easing } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { width, height } from '../../utils/styleConstants';
import PresentCardModal from '../components/PresentCardModal';
import SuccessModal from '../components/SuccessModal';
import Receipt from '../components/Receipt';
import { cardInserted } from '../../redux/actions/cardInserted';
import { launchModal } from '../../redux/actions/modal';
import { LineaMPos } from 'react-native-linea';

class Overlay extends Component {
	constructor() {
		super();
		this.state = {
			slide: 0,
			hide: true,
			receipt: ''
		};
		this.mpos = new LineaMPos();
		this.presentCard = new Animated.Value(500);
		this.mpos.addReceiptListener(this.receiptListener);
		this.slides = ['PresentCard', 'Success', 'receipt'];
	}

	componentWillReceiveProps(nextProps) {
		const { transactionSuccess, showModal } = nextProps;
		if (
			transactionSuccess === true &&
			transactionSuccess !== this.props.transactionSuccess
		) {
			this.slideOut();
		}
		// if (showModal === false && showModal !== this.props.showModal) {

		// }
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
	receiptListener = data => {
		this.setState({
			receipt: data
		});
	};
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
			this.setState(({ hide, slide }) => ({
				hide: !hide,
				slide: (slide += 1)
			}));
		}
	};
	closeModal = () => {
		const { launchModal } = this.props;
		this.setState({
			slide: 0,
			hide: true
		});
		launchModal(false);
	};
	render() {
		const {
			showModal,
			cardInserted,
			navigation: { navigate }
		} = this.props;
		const { slide, hide, receipt } = this.state;
		return (
			<Modal
				visible={showModal}
				animationType="fade"
				transparent={true}
				onShow={this.handleModalLoad}
				onDismiss={() => navigate('WriteNFC')}
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
								closeModal={this.slideOut}
							/>
						</Animated.View>
					)}
					{this.slides[slide] === 'receipt' && (
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
							<Receipt
								currentSlide={slide}
								receipt={receipt}
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
