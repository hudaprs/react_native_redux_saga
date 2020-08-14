import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

// Icon 
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'

// Navigations
import TodoStack from './TodoStack'
import AboutStack from './AboutStack'

const BottomTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
		>
			<Tab.Screen 
				name="Todo" 
				component={TodoStack} 
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <FontAwesome name='list' size={size} color={color}/>
					}
				}}
			/>
			<Tab.Screen 
				name="About" 
				component={AboutStack} 
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <FontAwesome name='info' size={size} color={color}/>
					}
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomTab