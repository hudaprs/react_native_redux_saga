import React from 'react'
import {
	StyleSheet, 
	TouchableOpacity,
	View,
	Text,
	ScrollView,
	FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import {
	DELETE_TODO_REQUESTED
} from '@reduxActions/todo-action'

// Global
import { globalStyles } from '@globalStyles/global'

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const TodoItem = ({ 
	loading, 
	todos,
	deleteTodo
}) => {
	return (
		<>
			<Text style={styles.todoItemHeaderText}>
				Todo List {"\n"}

				{loading && "Loading...\n"}
			</Text>

			<FlatList 
				data={todos} 
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{ 
					paddingBottom: 30
				}}
				showsVerticalScrollIndicator={false}
				renderItem={({item}) => (
					<>
						<TouchableOpacity style={styles.todoItem}>
							<Text style={styles.todoItemText}>
								{item.title}
							</Text>
							<TouchableOpacity onPress={() => deleteTodo(item.id)}>
								<Icon name='times' size={20} color={'#e74c3c'} />
							</TouchableOpacity>
						</TouchableOpacity>
					</>
				)}
		 	/>
		</>
	)
}

TodoItem.propTypes = {
	loading: PropTypes.bool.isRequired,
	todo: PropTypes.object,
	deleteTodo: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	todoItemHeaderText: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	todoItem: {
		backgroundColor: '#fff',
		marginBottom: 10,
		borderRadius: 4,
		paddingVertical: 10,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	todoItemText: {
		color: '#555',
		fontSize: 14,
		width: '80%'
	}
})

const mapDispatchToProps = (dispatch) => ({
	deleteTodo: (id) => dispatch({ type: DELETE_TODO_REQUESTED, payload: id })
})

export default connect(null, mapDispatchToProps)(TodoItem)