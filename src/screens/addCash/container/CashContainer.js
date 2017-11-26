import React, { Component } from 'react';
import { LineaPro, LineaMPos } from 'react-native-linea';
import {
	TouchableOpacity,
	StyleSheet,
	View,
	Text,
	AlertIOS
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { lineaConnected } from '../../../redux/actions/lineaConnected';
import Counter from '../components/Counter';
import CheckoutButton from '../components/CheckoutButton';

class Cash extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};
		this.mpos = new LineaMPos();
		this.mpos.addDebugListener(this.debugListener);
		this.mpos.addSmartCardInsertedListener(this.cardInsertedListener);
		this.mpos.addTransactionStartedListener(this.transactionListener);
	}

	componentDidMount() {
		this.mpos.initialize();
	}

	debugListener = error => {
		console.log('error:', error);
	};

	cardInsertedListener = data => {
		console.log(data);
		this.mpos.startTransaction();
	};

	transactionListener = data => {
		console.log('transaction listener', data);
	};

	render() {
		return (
			<View style={styles.container}>
				<Counter />
				<View style={styles.flex}>
					<CheckoutButton />
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ lineaStatus }) => {
	return { lineaStatus };
};

export default connect(mapStateToProps)(Cash);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
		backgroundColor: 'white',
		alignItems: 'center'
	},
	flex: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 50
	}
});
