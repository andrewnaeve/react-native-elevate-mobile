import React, { Component } from 'react';
import {
	View,
	FlatList,
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
import TicketStub from './TicketStub';
import { PricingCard } from 'react-native-elements';
import { Button } from 'react-native-elements';

class ElevateStore extends Component {
	constructor() {
		super();
		this.state = {
			total: 0
		};
		this.ticketTypes = ['General Admission', 'Reserved'];
	}

	componentWillUnmount() {
		const {
			navigation: { state: { params: { resetDisabled } } }
		} = this.props;
		resetDisabled();
	}

	addCheckoutTotal = ticketPrice => {
		this.setState(prevState => ({
			total: prevState.total + ticketPrice
		}));
	};
	subtractCheckoutTotal = ticketPrice => {
		this.setState(prevState => ({
			total: prevState.total - ticketPrice
		}));
	};
	_renderItem = data => {
		const { item } = data;
		return (
			<TicketStub
				title={item.key}
				addCheckoutTotal={this.addCheckoutTotal}
				subtractCheckoutTotal={this.subtractCheckoutTotal}
			/>
		);
	};
	_types = () => {
		return this.ticketTypes.map(x => {
			return { key: x };
		});
	};
	render() {
		const total = this.state.total.toFixed(2);
		const totalString = `Checkout for $${total}`;
		return (
			<View style={styles.container}>
				<View style={styles.list}>
					<FlatList
						data={this._types()}
						renderItem={this._renderItem}
					/>
				</View>
				<Button
					raised
					large
					buttonStyle={{
						backgroundColor: '#85bb65',
						borderRadius: 10
					}}
					icon={{ name: 'monetization-on' }}
					title={totalString}
					style={styles.checkout}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white'
	},
	list: {
		flex: 1,
		marginTop: 30
	},
	checkout: {
		marginBottom: 20,
		width: width * 0.8
	}
});

const mapStateToProps = ({ assetsLoaded, cart }) => {
	return { assetsLoaded };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ unloadAsset, assetReady, appReady }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ElevateStore);
