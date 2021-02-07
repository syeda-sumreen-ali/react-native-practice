import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { FONTS } from '../../constants'

export const HeaderComponent = ({
	navigation, title, titleSideText, caption, rightBtnText, rightBtnTextStyle,
	rightBtnStyle, onPressRightBtn, leftBtnText, leftBtnTextStyle, leftBtnStyle,
	onPressLeftBtn, titleStyle, titleSideTextStyle, captionStyle, headerStyle, theme }) => {

	const styles = StyleSheet.create({
		header: {
			flexDirection: 'row',
			height: 60,
			borderBottomColor: theme.borderColor,
			borderBottomWidth: 0.5,
			backgroundColor: theme.base
		},
		rightBtnStyle: {
			flex: 0.2,
			justifyContent: 'center',
			alignItems: 'center'
		},
		leftBtnStyle: {
			flex: 0.2,
			justifyContent: 'center',
			alignItems: 'center'
		},
		titlecontainer: {
			flex: 0.6,
			justifyContent: 'center',
			alignItems: 'center'
		},
		title: {
			...FONTS.h3_m,
			color: theme.h1
		},
		rightBtnTextStyle: { color: theme.text, ...FONTS.h6_r },
		leftBtnTextStyle: { color: theme.text, ...FONTS.h6_r }
	})
	return (
		<View style={[styles.header, headerStyle]}>

			<TouchableHighlight
				underlayColor={theme.base2}

				style={[styles.rightBtnStyle, rightBtnStyle]}
				onPress={() => { onPressRightBtn() ? onPressRightBtn() : {} }}>
				<Text style={[styles.rightBtnTextStyle, rightBtnTextStyle]} > {rightBtnText || 'Back'}</Text>
			</TouchableHighlight>

			<View style={styles.titlecontainer}>
				<Text style={[styles.title, titleStyle]}>{title}
					{titleSideText &&
						<Text style={[styles.titleSideTextStyle, titleSideTextStyle]}>{titleSideText}</Text>}
				</Text>

				{caption && <Text style={[styles.caption, captionStyle]}>{caption}</Text>}
			</View>

			<TouchableHighlight
				underlayColor={theme.primary2}
				style={[styles.leftBtnStyle, leftBtnStyle]}
				onPress={() => { onPressLeftBtn() ? onPressLeftBtn() : {} }}
			>
				<Text style={[styles.leftBtnTextStyle, leftBtnTextStyle]}>{leftBtnText || 'Done'}</Text>
			</TouchableHighlight>
		</View>
	)
}


