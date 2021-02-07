import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native'
import { TextFieldComponent, HeaderComponent, ScreenComponent, ImagePickerComponent } from '../../components'

const ProfileScreenComponent = ({ navigation, theme, contributer, onChangeText, isContributerLoading, submitForm, clearForm }) => {
	const { name, age, designation, state } = contributer
	// console.log("contributer============", contributer)
	return (
		<ScreenComponent>

			{isContributerLoading ? <View style={styles.centerScreen}>

				<ActivityIndicator size="large" color={theme.primary2} />
			</View> : <View>
					<HeaderComponent
						navigation={navigation}
						title={'Profile'}
						theme={theme}
						rightBtnText={'Reset'}
						leftBtnText={'Submit'}
						onPressRightBtn={() => { clearForm() }}
						onPressLeftBtn={() => { submitForm() }}
					/>
					{/* <ImagePickerComponent /> */}
					<TextFieldComponent
						value={name}
						theme={theme}
						placeholder={'enter name'}
						onChangeText={val => onChangeText('name', val)} />

					<TextFieldComponent
						value={age}
						theme={theme}
						placeholder={'enter age'}
						onChangeText={val => onChangeText('age', val)} />

					<TextFieldComponent
						value={designation}
						theme={theme}
						placeholder={'enter designation'}
						onChangeText={val => onChangeText('designation', val)} />

				</View>}
		</ScreenComponent>

	)
}

export default ProfileScreenComponent

const styles = StyleSheet.create({
	centerScreen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
