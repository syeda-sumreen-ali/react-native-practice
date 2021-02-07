import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import { setThemeAction } from '../../store/actions'

const ScreenComponent = (props) => {
	let { children } = props
	const styles = StyleSheet.create({
		screen: {
			backgroundColor: props.theme.base2,
			height: '100%',
		},
		button: {
			backgroundColor: '#fff',
			width: "30%",
			height: 30,
			alignSelf: 'flex-end',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 25,
			elevation: 4,
			marginTop: '2%',
			marginRight: '2%'


		}
	})
	return (
		<SafeAreaView >
			<View style={styles.screen}>
				<TouchableHighlight style={styles.button}
					onPress={() => props.activeThemeName === 'DARK_THEME' ? props.setThemeAction('LIGHT_THEME') : props.setThemeAction('DARK_THEME')
					}>
					<Text >changeTheme</Text>
				</TouchableHighlight>

				{children}
			</View>
		</SafeAreaView>
	)

}

const mapStateToProps = props => {
	const { theme, activeThemeName } = props.theme
	return {
		activeThemeName: activeThemeName,
		theme: theme
	}
}

export default connect(mapStateToProps, { setThemeAction })(ScreenComponent)

