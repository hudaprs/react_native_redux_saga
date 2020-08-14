import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Components
import About from '@screens/about/About'

const AboutStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="About" component={About} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

export default AboutStack