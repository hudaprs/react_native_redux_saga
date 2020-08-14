import { 
	StyleSheet,
	Dimensions 
} from 'react-native'

const deviceWidth = Dimensions.get('window').width // full width
const deviceHeight = Dimensions.get('window').height // full height

export const globalStyles = StyleSheet.create({
	wrapper: {
		width: deviceWidth,
		height: deviceHeight
	},
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
	mt2: {
		marginTop: 20,
	},
	mb2: {
		marginBottom: 10
	},
	formContainer: {
		marginBottom: 10
	},
	input: {
		paddingHorizontal: 10,
		fontSize: 16,
		paddingVertical: 5,
		borderBottomWidth: 1,
		borderColor: '#555'
	},
	btn: {
		width: '100%',
		backgroundColor: '#555',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 2
	},
	btnText: {
		textAlign: 'center',
		color: '#fff',
		textTransform: 'uppercase'
	}
})