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
import { cardInserted } from '../../../redux/actions/cardInserted';
import { transactionSuccess } from '../../../redux/actions/transactionSuccess';
import Overlay from '../../../modals/container/Overlay';
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
		this.mpos.addTransactionFinishedListener(
			this.transactionFinishedListener
		);
	}

	componentDidMount() {
		this.mpos.initializeEmv();
	}

	debugListener = error => {
		console.log('error:', error);
	};

	cardInsertedListener = data => {
		console.log(data);
		this.props.cardInserted(true);
		this.mpos.startTransaction();
	};

	transactionListener = data => {
		console.log('transaction listener', data);
	};

	transactionFinishedListener = data => {
		const { transactionSuccess } = this.props;
		this.props.cardInserted(false);
		if (data === 'success') {
			transactionSuccess(true);
		} else if (data === 'failure') {
			transactionSuccess(false);
		}
		console.log('transaction Finished Listener', data);
	};

	render() {
		return (
			<View style={styles.container}>
				<Counter />
				<View style={styles.flex}>
					<CheckoutButton />
				</View>
				<Overlay navigation={this.props.navigation} />
			</View>
		);
	}
}

const mapStateToProps = ({ lineaStatus }) => {
	return { lineaStatus };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ cardInserted, transactionSuccess }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cash);

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
