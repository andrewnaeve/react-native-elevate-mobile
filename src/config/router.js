import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../components/Home/Home';
import PulseReader from '../components/NFC/PulseReader';
import Linea from '../components/Linea/Linea';
import ElevateStore from '../components/Elevate/ElevateStore';

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
