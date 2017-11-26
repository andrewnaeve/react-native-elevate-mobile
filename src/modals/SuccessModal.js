import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { width, height } from '../utils/styleConstants';
import Card from './Card';

export default (SuccessModal = () => (
	<Card>
		<Text style={styles.header}>Success!</Text>
	</Card>
));

const styles = StyleSheet.create({
	header: {
		fontSize: 35,
		marginTop: 10,
		fontWeight: '600',
		alignSelf: 'center',
		backgroundColor: 'transparent'
	}
});
