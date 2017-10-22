import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../components/Home/Home';
import PulseReader from '../components/PulseReader/PulseReader';
import Linea from '../components/Linea/Linea';

export const HomeScreen = StackNavigator({
	Home: {
		screen: Home
	},
	Linea: {
		screen: Linea
	},
	PulseReader: {
		screen: PulseReader
	}
});

// export const Elevate = StackNavigator({
// 	Elevate: {
// 		screen: Linea
// 	}
// })
