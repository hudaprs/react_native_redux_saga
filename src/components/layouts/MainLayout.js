import React from 'react'
import { SafeAreaView, View } from 'react-native'

// Components
import Header from '@components/inc/Header'

// Global
import { globalStyles } from '@globalStyles/global'

const MainLayout = ({children}) => {
	return (
		<SafeAreaView style={globalStyles.wrapper}>
			<Header />

			<View style={globalStyles.container}>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default MainLayout