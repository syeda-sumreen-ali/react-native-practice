import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { FONTS } from '../../constants'
// import { DARK_THEME } from '../../constants'

export const TextFieldComponent = ({ value, onChangeText, placeholder, style, theme }) => {

	const styles = StyleSheet.create({
		textInput: {
			width: '95%',
			height: 60,
			backgroundColor: theme.light,
			borderColor: theme.borderColor,
			borderWidth: 1,
			alignSelf: 'center',
			marginTop: '4%',
			paddingLeft: 15,
			borderRadius: 4,
			backgroundColor: theme.light,
			...FONTS.p1_r
		}
	})
	return (
		<View>
			<TextInput
				value={value}
				placeholderTextColor={theme.placeholder}
				onChangeText={val => onChangeText(val)} placeholder={placeholder}
				style={[styles.textInput, style]} />
		</View>
	)
}


