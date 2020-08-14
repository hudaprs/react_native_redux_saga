import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Navigations
import BottomTab from './BottomTab'

const Root = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="App" component={BottomTab} /> 
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Root