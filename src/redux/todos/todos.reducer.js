import { todoActionTypes } from './todos.types'
import { deleteTheTodo, addTheTodo, updateTheTodo, changeTheMode } from './todos.utils'
import uuid from 'uuid'

const INITIAL_STATE = {
    todos: [
        {
            id: uuid.v4(),
            task: 'Learn react'
        },
        {
            id: uuid.v4(),
            task: 'Participate in zoom'
        },
        {
            id: uuid.v4(),
            task: 'Play pc game'
        }
    ],
    title: '',
    updatedTitle: ''
}

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case todoActionTypes.DELETE_TODO:
            return {
                ...state,
                todos: deleteTheTodo(state.todos, action.payload)
            }
        case todoActionTypes.CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case todoActionTypes.UPDATE_TITLE:
            return {
                ...state,
                updatedTitle: action.payload
            }
        case todoActionTypes.ADD_TODO:
            return {
                ...state,
                todos: addTheTodo(state.todos, action.payload)
            }
        case todoActionTypes.CHANGE_MODE:
            return {
                ...state,
                todos: changeTheMode(state.todos, action.payload)
            }
        case todoActionTypes.UPDATE_TODO:
            return {
                ...state,
                todos: updateTheTodo(state.todos, action.payload)
            }
        default:
            return state
    }
}

export default todosReducer