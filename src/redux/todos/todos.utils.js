import uuid from 'uuid'

export const deleteTheTodo = (todos, itemToDelete) => {
    let filteredTodos = todos.filter(item => item.id !== itemToDelete.id)
    return filteredTodos
}

export const addTheTodo = (todos, itemToAdd) => {
    let addTodo = [...todos]
    addTodo.push({
        id: uuid.v4(),
        task: itemToAdd
    })
    return addTodo
}

export const changeTheMode = (todos, toEdit) => {
    let todo = [...todos]
    todos.map(item => {
        if (item.id === toEdit) {
            item.mode = !item.mode
        }
        else {
            item.mode = false
        }
        return item
    })
    return todo
}

export const updateTheTodo = (todos, todoToUpdate) => {
    let updatedTodo = [...todos]
    updatedTodo.map(item => {
        if (item.id === todoToUpdate.todo.id) {
            item.task = todoToUpdate.updatedTitle
            item.mode = false
        }
        return item
    })
    return updatedTodo
}