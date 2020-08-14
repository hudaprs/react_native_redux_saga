import {
	SET_LOADING,
	GET_TODOS,
	SET_TODO_TITLE,
	CLEAR_TODO_TITLE,
	CREATE_TODO
} from '../actions/todo-action'

const initialState = {
	loading: false,
	todos: [],
	title: ''
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
		default:
			return state
	}
}