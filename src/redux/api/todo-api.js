const URL = 'https://jsonplaceholder.typicode.com/todos'

export const getAllTodos = async () => {
	try {
		const todos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
		const todosJSON = await todos.json()
		
		return todosJSON
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
		const todo = await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify(newTodo)
		})

		const todoJSON = await todo.json()

		return todoJSON
	} catch(err) {
		console.error(err)
	}
}

export const deleteExistedTodo = async (id) => {
	try {
		const todo = await fetch(`${URL}/${id}`, {
			method: 'DELETE'
		})

		await todo.json()

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
		const todo = await fetch(`${URL}/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify(updatedTodo)
		})

		const todoJSON = await todo.json()

		return todoJSON
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
		const updatedTodo = await fetch(`${URL}/${todo.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify(existedTodo)
		})

		const todoJSON = await updatedTodo.json()

		return todoJSON
	} catch(err) {
		console.error(err)
	}
}
