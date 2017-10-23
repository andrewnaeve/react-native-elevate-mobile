import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	Animated,
	Easing,
	StyleSheet
} from 'react-native';
import { height, width } from '../utils/styleConstants';
import Icon from 'react-native-vector-icons/FontAwesome';

class TicketStub extends Component {
	constructor() {
		super();
		this.state = {
			quantity: 0
		};
	}
	increment = () => {
		this.setState(prevState => ({
			quantity: prevState.quantity + 1
		}));
		this.props.addCheckoutTotal(99.0);
	};
	decrement = () => {
		if (this.state.quantity > 0) {
			this.setState(prevState => ({
				quantity: prevState.quantity - 1
			}));
			this.props.subtractCheckoutTotal(99.0);
		}
	};
	render() {
		const { quantity } = this.state;
		const { title } = this.props;
		const priceColor = quantity > 0 ? 'green' : 'black';
		return (
			<View style={styles.container}>
				<View style={styles.stub}>
					<Text style={styles.headline}>{title}</Text>
					<View style={styles.row}>
						<Icon
							style={styles.ticket}
							name="ticket"
							size={60}
							color="#4F8EF7"
						/>
						<Text style={styles.price}>$99</Text>
					</View>
					<View style={styles.row}>
						<TouchableWithoutFeedback onPress={this.decrement}>
							<Icon name="minus" size={30} color="#4F8EF7" />
						</TouchableWithoutFeedback>
						<Text style={[{ color: priceColor }, styles.quantity]}>
							{quantity}
						</Text>
						<TouchableWithoutFeedback onPress={this.increment}>
							<Icon name="plus" size={30} color="#4F8EF7" />
						</TouchableWithoutFeedback>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	stub: {
		width: width * 0.8,
		height: 200,
		marginTop: 20,
		borderRadius: 10,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#e0e0e0',
		marginBottom: 10,
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
		fontFamily: 'Helvetica-Bold',
		color: 'black',
		fontSize: 30,
		backgroundColor: 'transparent',
		marginBottom: 10
	},
	price: {
		fontSize: 40,
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
