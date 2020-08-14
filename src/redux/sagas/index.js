import {
	spawn
} from 'redux-saga/effects'

// Sagas
import todoSaga from './todo-saga'

export default function* rootSaga() {
	yield spawn(todoSaga)
}