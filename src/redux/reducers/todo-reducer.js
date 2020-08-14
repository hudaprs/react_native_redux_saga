import {
	SET_LOADING,
	GET_TODOS,
	SET_TODO_TITLE,
	CLEAR_TODO_TITLE,
	CREATE_TODO,
	DELETE_TODO,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_TODO,
	CHECK_TODO
} from '../actions/todo-action'

const initialState = {
	loading: false,
	todos: [],
	title: '',
	current: null
}

export default (state = initialState, {type, payload}) => {
	switch(type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case GET_TODOS:
			return {
				...state,
				todos: payload,
				loading: false
			}
		case SET_TODO_TITLE:
			return {
				...state,
				title: payload
			}
		case CLEAR_TODO_TITLE:
			return {
				...state,
				title: ''
			}
		case CREATE_TODO:
			return {
				...state,
				todos: [payload, ...state.todos],
				loading: false
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== payload),
				loading: false
			}
		case SET_CURRENT:
			return {
				...state,
				current: payload,
				title: payload.title
			}
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
				title: ''
			}
		case UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => todo.id === payload.id ? payload : todo),
				loading: false
			}
		case CHECK_TODO:
			return {
				...state,
				todos: state.todos.map(todo => todo.id === payload.id ? payload : todo),
				loading: false
			}
		default:
			return state
	}
}