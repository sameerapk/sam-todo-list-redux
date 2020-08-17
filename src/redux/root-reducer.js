import { combineReducers } from 'redux'

import todosReducer from './todos/todos.reducer'


export default combineReducers({
    todos: todosReducer
})
