import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { width, height } from '../../utils/styleConstants';

const Card = props => <View style={styles.container}>{props.children}</View>;

export default Card;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: '#f0f0f0',
		opacity: 1,
		backgroundColor: 'white',
		width: width * 0.8,
		height: height * 0.6
	}
});
