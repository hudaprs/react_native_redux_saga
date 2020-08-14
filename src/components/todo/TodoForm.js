import React from 'react'
import {
	View,
	TextInput,
	TouchableOpacity,
	Text
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import {
	SET_TODO_TITLE_REQUESTED,
	CREATE_TODO_REQUESTED
} from '@reduxActions/todo-action'

// Global
import { globalStyles } from '@globalStyles/global'

const TodoForm = ({title, setTodoTitle, createNewTodo}) => {
	const onPress = () => {
		createNewTodo(title)
	}

	return (
		<View style={[globalStyles.mb2, globalStyles.formContainer]}>
			<TextInput 
				style={[globalStyles.input, globalStyles.mb2]} 
				onChangeText={value => setTodoTitle(value)}
				value={title}
				placeholder="What needs to be done..." />
			<TouchableOpacity style={globalStyles.btn} onPress={onPress}>
				<Text style={globalStyles.btnText}>
					Save
				</Text>
			</TouchableOpacity>
		</View>
	)
}

TodoForm.propTypes = {
	setTodoTitle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	title: state.todo.title
}) 

const mapDispatchToProps = (dispatch) => ({
	setTodoTitle: (title) => dispatch({ type: SET_TODO_TITLE_REQUESTED, payload: title }),
	createNewTodo: (title) => dispatch({ type: CREATE_TODO_REQUESTED, payload: title })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)