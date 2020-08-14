import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Navigations
import TodoStack from './TodoStack'
import DrawerNavigation from './DrawerNavigation'

const RootStackNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="App" component={DrawerNavigation} /> 
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default RootStackNavigation