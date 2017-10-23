import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../components/Home/Home';
import PulseReader from '../components/PulseReader/PulseReader';
import Linea from '../components/Linea/Linea';
import ElevateStore from '../components/Elevate/ElevateStore';

const Elevate = StackNavigator({
	Elevation: {
		screen: ElevateStore
	}
});

export const HomeScreen = StackNavigator(
	{
		Home: {
			screen: Home
		},
		Elevate: {
			screen: Elevate
		},
		PulseReader: {
			screen: PulseReader
		}
	},
	{
		headerMode: 'none'
	}
);
