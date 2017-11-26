import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LineaPro, LineaMPos } from 'react-native-linea';
import { addBalance } from '../../../redux/actions/addBalance';
import { subtractBalance } from '../../../redux/actions/subtractBalance';
import { width, height } from '../../../utils/styleConstants';
import { Button, Icon } from 'react-native-elements';

class Counter extends Component {
	incrementBalance = () => {
		const { addBalance } = this.props;
		addBalance(5);
	};
	decrementBalance = () => {
		const { subtractBalance, balance } = this.props;
		if (balance > 0) {
			subtractBalance(5);
		}
	};
	render() {
		const { balance } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>${balance}</Text>
				<View style={styles.flex}>
					<View style={styles.row}>
						<Icon
							reverse
							raised
							name="ios-cash"
							type="ionicon"
							color="#ed0000"
							onPress={this.decrementBalance}
						/>
						<Icon
							reverse
							raised
							name="ios-cash"
							type="ionicon"
							color="#009d00"
							onPress={this.incrementBalance}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ balance }) => {
	return { balance };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addBalance, subtractBalance }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
	container: {
		width: width * 0.8,
		height: height * 0.35,
		marginTop: 30,
		backgroundColor: '#eeeded',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		shadowColor: '#2d2e30',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5
	},
	counter: {
		flex: 1
	},
	row: {
		flexDirection: 'row',
		width: width * 0.8,
		justifyContent: 'space-around',
		marginTop: 10,
		backgroundColor: 'white',
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10
	},
	text: {
		fontSize: 60,
		marginTop: 30
	},
	flex: {
		flex: 1,
		justifyContent: 'flex-end'
	}
});
