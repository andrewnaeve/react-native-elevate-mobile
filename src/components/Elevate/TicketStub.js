import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	Animated,
	Easing,
	StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unloadAsset } from '../../actions/unloadAsset';
import { assetReady } from '../../actions/assetReady';
import { appReady } from '../../actions/appReady';
import { height, width } from '../utils/styleConstants';
import Icon from 'react-native-vector-icons/FontAwesome';

const TicketStub = props => {
	const priceColor = props.quantity > 0 ? 'green' : 'black';
	return (
		<View style={styles.container}>
			<View style={styles.stub}>
				<Text style={styles.headline}>{props.title}</Text>
				<Icon
					style={styles.ticket}
					name="ticket"
					size={80}
					color="#4F8EF7"
				/>
				<Text style={styles.price}>$99</Text>
				<View style={styles.row}>
					<TouchableWithoutFeedback onPress={props.decrement}>
						<Icon name="minus" size={30} color="#4F8EF7" />
					</TouchableWithoutFeedback>
					<Text style={[{ color: priceColor }, styles.quantity]}>
						{props.quantity}
					</Text>
					<TouchableWithoutFeedback onPress={props.increment}>
						<Icon name="plus" size={30} color="#4F8EF7" />
					</TouchableWithoutFeedback>
				</View>
			</View>
		</View>
	);
};

// <View style={styles.edgeTopLeft} />
// <View style={styles.edgeTopRight} />
// <View style={styles.edgeBottomRight} />
// <View style={styles.edgeBottomLeft} />
const styles = StyleSheet.create({
	stub: {
		width: width * 0.8,
		height: 250,
		marginTop: 20,
		borderRadius: 10,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#e0e0e0',
		marginBottom: 30,
		alignItems: 'center',
		shadowColor: '#f1f1f1',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 0.5,
		shadowOpacity: 0.8
	},
	headline: {
		fontFamily: 'Helvetica Neue',
		color: '#4F8EF7',
		fontSize: 30,
		backgroundColor: 'transparent',
		marginBottom: 10
	},
	price: {
		fontSize: 30,
		color: '#4F8EF7',
		marginTop: 10
	},
	quantity: {
		fontFamily: 'PingFangTC-SemiBold',
		fontSize: 35
	},
	row: {
		flexDirection: 'row',
		width: width * 0.8,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 10
	}
});

export default TicketStub;
