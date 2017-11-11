import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home/container/Home';
import PulseReader from '../screens/nfc/container/PulseReader';
import Linea from '../screens/linea/container/Linea';

export const HomeScreen = StackNavigator(
	{
		Home: {
			screen: Home
		},
		Elevate: {
			screen: Linea
		},
		Pulse: {
			screen: PulseReader
		}
	},
	{
		headerMode: 'none'
	}
);
