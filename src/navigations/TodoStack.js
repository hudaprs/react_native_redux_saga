import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Screens
import Todo from '@screens/todo/Todo'

const TodoStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Todo" 
				component={Todo}  
				options={{
					headerShown: false 
				}}
			/>
		</Stack.Navigator>
	)
}


export default TodoStack