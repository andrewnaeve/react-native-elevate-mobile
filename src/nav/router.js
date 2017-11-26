import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home/container/Home';
import PulseReader from '../screens/nfc/container/PulseReader';
import Cash from '../screens/addCash/container/CashContainer';

export const HomeScreen = StackNavigator(
	{
		Home: {
			screen: Home
		},
		Elevate: {
			screen: Cash
		},
		Pulse: {
			screen: PulseReader
		}
	},
	{
		headerMode: 'none'
	}
);
