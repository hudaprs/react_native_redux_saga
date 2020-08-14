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