import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Screen
import Contact from '@screens/contact/Contact'

const ContactStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Contact' component={Contact} />
		</Stack.Navigator>
	)
}

export default ContactStack