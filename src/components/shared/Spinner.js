import React from 'react';
import {ActivityIndicator} from 'react-native';

const Spinner = ({ size }) => {
	return <ActivityIndicator style={styles.spinnerStyle} size={size || 'large'} />
};

const styles = {
	spinnerStyle: {
		flex:1,
		backgroundColor:'#0b0f1c',
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default Spinner ;