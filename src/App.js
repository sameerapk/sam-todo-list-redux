import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './components/TodoItem/todo-item.component'
import AddTodo from './components/AddTodo/add-todo.component'


class App extends Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        <AddTodo />
        {
          todos.length ? todos.map((todo, i) => (
            <TodoItem key={i} todo={todo} mode={todo.mode} />
          )) :
            <p>No more todos</p>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ todos: { todos } }) => ({
  todos
})

export default connect(mapStateToProps)(App)

