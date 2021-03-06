import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LineaPro, LineaMPos } from 'react-native-linea';
import { addBalance } from '../../../redux/actions/addBalance';
import { subtractBalance } from '../../../redux/actions/subtractBalance';
import { launchModal } from '../../../redux/actions/modal';
import { width, height } from '../../../utils/styleConstants';
import { Button, Icon } from 'react-native-elements';

class CheckoutButton extends Component {
	beginCheckout = () => {
		const { launchModal } = this.props;
		launchModal(true);
	};
	render() {
		return (
			<Button
				style={styles.button}
				borderRadius={5}
				raised
				large
				backgroundColor="#009d00"
				icon={{
					name: 'shopping-cart',
					type: 'font-awesome'
				}}
				title="CHECKOUT"
				onPress={this.beginCheckout}
			/>
		);
	}
}

const mapStateToProps = ({ balance }) => {
	return { balance };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{ addBalance, subtractBalance, launchModal },
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutButton);

const styles = StyleSheet.create({
	button: {
		width: width * 0.8
	}
});
