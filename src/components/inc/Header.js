import React from 'react'
import { 
	View, 
	Text,
	StyleSheet 
} from 'react-native'

const Header = () => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.navbarText}>
				Todos
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		width: '100%',
		backgroundColor: '#333',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		height: 60
	},
	navbarText: {
		fontSize: 21,
		color: '#fff',
		fontWeight: 'bold'
	}
})

export default Header