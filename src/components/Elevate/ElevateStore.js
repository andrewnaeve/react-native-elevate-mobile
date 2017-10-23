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

class ElevateStore extends Component {
	constructor() {
		super();
		this.state = {
			quantity: 0
		};
		this.ticketTypes = ['General Admission', 'Reserved'];
	}
	increment = () => {
		this.setState((prevState, props) => ({
			quantity: prevState.quantity + 1
		}));
	};
	decrement = () => {
		this.state.quantity > 0 &&
			this.setState((prevState, props) => ({
				quantity: prevState.quantity - 1
			}));
	};
	_renderItem = data => {
		const { quantity } = this.state;
		const { item } = data;
		console.log(item);
		return (
			<TicketStub
				title={item.key}
				increment={this.increment}
				decrement={this.decrement}
				quantity={quantity}
			/>
		);
	};
	_types = () => {
		return this.ticketTypes.map(x => {
			return { key: x };
		});
	};
	render() {
		return (
			<View style={styles.container}>
				<FlatList data={this._types()} renderItem={this._renderItem} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white'
	}
});

const mapStateToProps = ({ assetsLoaded, cart }) => {
	return { assetsLoaded };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ unloadAsset, assetReady, appReady }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ElevateStore);
