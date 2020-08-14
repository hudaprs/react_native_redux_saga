import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

// Screen
import BottomTabHome from './BottomTabHome'
import ContactStack from './ContactStack'

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Home' component={BottomTabHome} />
			<Drawer.Screen name='Contact' component={ContactStack} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigation