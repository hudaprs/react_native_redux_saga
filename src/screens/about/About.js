import React from 'react'
import { 
	View,
	Text
} from 'react-native'

// Components
import MainLayout from '@components/layouts/MainLayout'

// Global Styles
import { globalStyles } from '@globalStyles/global'

const About = () => {
	return (
		<MainLayout>
			<Text style={globalStyles.mt2}> 
				This application is build with React Native and React Navigation V5
			</Text>
		</MainLayout>
	)
}

export default About