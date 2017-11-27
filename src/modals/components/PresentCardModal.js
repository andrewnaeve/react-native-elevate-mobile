import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { width, height } from '../../utils/styleConstants';
import Card from './Card';

export default (PresentCardModal = props => (
	<Card>
		<Text style={styles.header}>Insert Card</Text>
		<View style={styles.cardWrapper}>
			<View style={styles.card}>
				<Text style={styles.bank}>The Shed</Text>
				<Text style={styles.cardholder}>Shederick</Text>
				<Text style={styles.numerals}>1234-5678-91011-1213</Text>
				<View style={styles.chip} />
			</View>
		</View>
		<View style={styles.activity}>
			{props.cardInserted && (
				<ActivityIndicator
					animating={true}
					size="large"
					color="#00b3ff"
				/>
			)}
		</View>
	</Card>
));

const styles = StyleSheet.create({
	header: {
		fontSize: 35,
		marginTop: 20,
		fontWeight: '600',
		alignSelf: 'center',
		backgroundColor: 'transparent'
	},
	cardWrapper: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 30
	},
	card: {
		borderRadius: 10,
		backgroundColor: '#f0f0f0',
		width: width * 0.6,
		height: height * 0.2,
		shadowColor: '#2d2e30',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5
	},
	bank: {
		position: 'absolute',
		top: 10,
		right: 15,
		fontSize: 25
	},
	numerals: {
		position: 'absolute',
		bottom: 42,
		left: 15,
		fontSize: 15,
		backgroundColor: 'transparent'
	},
	cardholder: {
		position: 'absolute',
		bottom: 10,
		left: 15,
		fontSize: 18,
		backgroundColor: 'transparent'
	},
	chip: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		width: 35,
		height: 25,
		borderColor: 'black',
		borderRadius: 5,
		backgroundColor: '#c1c1c1'
	},
	activity: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
