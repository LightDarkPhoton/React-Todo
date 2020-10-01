import React from 'react';

class TodoForm extends React.Component {

    constructor(){
        super()
        this.state = {
            newTodo: ""
        }
    }

    handleChanges = (e) => {
        // Handle Changes updates the state with every keystroke...Huh.

        console.log(e.target.name, e.target.value)

        this.setState({...this.state, newTodo: e.target.value})
    }

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
        this.setState({...this.state, newTodo: ""})
    }

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input 
                    type="text"
                    name="todo"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}



export default TodoForm;