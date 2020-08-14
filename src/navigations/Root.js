import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Navigations
import TodoStack from './TodoStack'

const Root = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Todo" component={TodoStack} /> 
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Root