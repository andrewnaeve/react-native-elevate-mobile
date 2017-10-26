import { Dimensions, StyleSheet, PixelRatio } from 'react-native';

export const { height, width } = Dimensions.get('window');

export const containerWidth = width * 0.95;

export function normalize(size) {
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(size));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(size)) - 2;
	}
}
