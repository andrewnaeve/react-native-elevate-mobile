import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { width, height } from '../../utils/styleConstants';
import Card from './Card';
import { Button, Icon } from 'react-native-elements';

export default (Receipt = props => (
	<Card>
		<Text style={styles.header}>Receipt</Text>
		<View style={styles.cardWrapper}>
			<View style={styles.card}>
				<Text style={styles.text}>{props.receipt}</Text>
			</View>
		</View>
		<Button
			style={styles.button}
			borderRadius={5}
			backgroundColor="#ff0000"
			title="Close"
			onPress={props.closeModal}
		/>
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
		width: width * 0.65,
		height: height * 0.3,
		shadowColor: '#2d2e30',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5
	},
	text: {
		marginTop: 5,
		marginLeft: 5,
		backgroundColor: 'transparent'
	},
	button: {
		marginBottom: 10
	}
});
