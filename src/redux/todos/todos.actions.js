import { todoActionTypes } from './todos.types'

export const deleteTodo = (item) => ({
    type: todoActionTypes.DELETE_TODO,
    payload: item
})

export const changeTitle = (item) => ({
    type: todoActionTypes.CHANGE_TITLE,
    payload: item
})

export const addTodo = (item) => ({
    type: todoActionTypes.ADD_TODO,
    payload: item
})

export const changeMode = (id) => ({
    type: todoActionTypes.CHANGE_MODE,
    payload: id
})

export const updateTitle = (item) => ({
    type: todoActionTypes.UPDATE_TITLE,
    payload: item
})

export const updateTodo = (todo, updatedTitle) => ({
    type: todoActionTypes.UPDATE_TODO,
    payload: { todo, updatedTitle }
})
