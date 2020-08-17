import React, { Component } from 'react'
import { changeTitle, addTodo } from '../../redux/todos/todos.actions'
import { connect } from 'react-redux'

class AddTodo extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.props.title)
        this.props.changeTitle('')
    }

    render() {
        const { title, changeTitle } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Add Todo'
                    value={title}
                    onChange={(e) => changeTitle(e.target.value)}
                />
                <input
                    type='submit'
                    value='Submit'
                />
            </form>
        )
    }
}

const mapStateToProps = ({ todos: { title } }) => ({
    title
})


const mapDispatchToProps = (dispatch) => ({
    changeTitle: item => dispatch(changeTitle(item)),
    addTodo: item => dispatch(addTodo(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
