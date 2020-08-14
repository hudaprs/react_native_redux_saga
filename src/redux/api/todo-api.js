import axios from 'axios'
const URL = 'https://jsonplaceholder.typicode.com/todos'

export const getAllTodos = async () => {
	try {
		const todos = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
		
		return todos.data
	} catch(err) {
		console.error(err)
	}
}

export const createNewTodo = async (title) => {
	const newTodo = {
		title,
		completed: false
	}

	try {
		const todo = await axios.post(URL, newTodo)

		return todo.data
	} catch(err) {
		console.error(err)
	}
}

export const deleteExistedTodo = async (id) => {
	try {
		const todo = await axios.delete(`${URL}/${id}`)

		return id
	} catch(err) {
		console.error(err)
	}
}

export const updateExistedTodo = async ({title, current}) => {
	const { id, completed } = current 

	const updatedTodo = {
		id,
		title,
		completed
	}

	try {
		const todo = await axios.patch(`${URL}/${id}`, updatedTodo)

		return todo.data
	} catch(err) {
		console.error(err)
	}
}

export const checkExistedTodo = async (todo) => {
	const existedTodo = {
		id: todo.id,
		title: todo.title,
		completed: !todo.completed
	}

	try {
		const updatedTodo = await axios.patch(`${URL}/${todo.id}`, existedTodo)
		
		return updatedTodo.data
	} catch(err) {
		console.error(err)
	}
}
