import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreenContainer from '../container';

const Stack = createStackNavigator()
export default function Route() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Profile'>
				<Stack.Screen name='Profie' component={ProfileScreenContainer} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}