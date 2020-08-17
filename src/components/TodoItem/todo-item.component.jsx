import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, changeMode, updateTitle, updateTodo } from '../../redux/todos/todos.actions'


class TodoItem extends Component {
    render() {
        const { mode, todo, deleteTodo, changeMode, updatedTitle, updateTitle, updateTodo } = this.props
        return (
            <h1>
                {!mode && todo.task}
                {!mode && <button onClick={() => deleteTodo(todo)}>X</button>}
                {!mode && <button onClick={() => { changeMode(todo.id); updateTitle(todo.task) }}>Edit</button>}
                {mode && <input type='text' value={updatedTitle} onChange={(e) => updateTitle(e.target.value)} />}
                {mode && <button onClick={() => changeMode(todo.id)}>Cancel</button>}
                {mode && <button onClick={() => updateTodo(todo, updatedTitle)}>Update</button>}
            </h1 >
        )
    }
}

const mapStateToProps = ({ todos: { updatedTitle } }) => ({
    updatedTitle
})

const mapDispatchToProps = dispatch => ({
    deleteTodo: todo => dispatch(deleteTodo(todo)),
    changeMode: id => dispatch(changeMode(id)),
    updateTitle: title => dispatch(updateTitle(title)),
    updateTodo: (todo, updatedTitle) => dispatch(updateTodo(todo, updatedTitle))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
