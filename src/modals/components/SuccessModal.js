import React, { Component } from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';
import { width, height } from '../../utils/styleConstants';
import Card from './Card';

export default class SuccessModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: new Animated.Value(0)
		};
	}

	componentDidMount() {
		this.startAnimation();
	}

	startAnimation = () => {
		Animated.timing(this.state.progress, {
			delay: 500,
			toValue: 1,
			duration: 3000,
			useNativeDriver: true
		}).start(() => {
			this.props.closeModal();
		});
	};

	render() {
		return (
			<Card>
				<Text style={styles.header}>Success!</Text>
				<View style={styles.body}>
					<View>
						<LottieView
							source={require('../../lottie/Success/Success.json')}
							progress={this.state.progress}
							style={styles.lottie}
						/>
					</View>
				</View>
			</Card>
		);
	}
}

const mapStateToProps = ({ showModal }) => {
	return { showModal };
};

//export default connect(mapStateToProps)(SuccessModal);

const styles = StyleSheet.create({
	header: {
		fontSize: 35,
		marginTop: 20,
		fontWeight: '600',
		alignSelf: 'center',
		backgroundColor: 'transparent'
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	lottie: {
		height: 200,
		width: 200
	}
});
