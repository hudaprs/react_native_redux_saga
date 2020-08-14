import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import {
	GET_TODOS_REQUESTED,
	SET_CURRENT_REQUESTED,
	UPDATE_TODO_REQUESTED,
	CHECK_TODO_REQUESTED
} from '@reduxActions/todo-action'

// Components
import MainLayout from '@components/layouts/MainLayout'
import TodoForm from '@components/todo/TodoForm'
import TodoItem from '@components/todo/TodoItem'

// Global
import { globalStyles } from '@globalStyles/global'

const Todo = ({
	todo: { todos, loading, current }, 
	getTodos,
	setCurrent,
	updateTodo,
	checkTodo
}) => {
	useEffect(() => {
		getTodos()

		// eslint-disable-next-line
	}, [])

	return (
		<MainLayout>
			<TodoForm 
				current={current}
				updateTodo={updateTodo} 
			/>
			<TodoItem 
				loading={loading} 
				todos={todos} 
				setCurrent={setCurrent}
				checkTodo={checkTodo}
			/>
		</MainLayout>
	)
}

Todo.propTypes = {
	todo: PropTypes.object,
	getTodos: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
	checkTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	todo: state.todo
})

const mapDispatchToProps = (dispatch) => ({
	getTodos: () => dispatch({ type: GET_TODOS_REQUESTED }),
	setCurrent: (current) => dispatch({ type: SET_CURRENT_REQUESTED, payload: current }),
	updateTodo: 
		({title, current}) => 
			dispatch({ type: UPDATE_TODO_REQUESTED, payload: { title, current } }),
	checkTodo: (todo) => dispatch({ type: CHECK_TODO_REQUESTED, payload: todo })
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)