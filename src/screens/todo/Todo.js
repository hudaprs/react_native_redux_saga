import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import {
	GET_TODOS_REQUESTED
} from '@reduxActions/todo-action'

// Components
import MainLayout from '@components/layouts/MainLayout'
import TodoForm from '@components/todo/TodoForm'
import TodoItem from '@components/todo/TodoItem'

// Global
import { globalStyles } from '@globalStyles/global'

const Todo = ({todo: { todos, loading }, getTodos}) => {
	useEffect(() => {
		getTodos()

		// eslint-disable-next-line
	}, [])

	return (
		<MainLayout>
			<TodoForm />
			<TodoItem loading={loading} todos={todos} />
		</MainLayout>
	)
}

Todo.propTypes = {
	todo: PropTypes.object,
	getTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	todo: state.todo
})

const mapDispatchToProps = (dispatch) => ({
	getTodos: () => dispatch({type: GET_TODOS_REQUESTED })
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)