import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from '../actions/todoActions';

class Todo extends Component {
   state = {
        value: '',
		completed: false,			 
  	}

    handleInput = (event) => {
        this.setState({ value: event.target.value });
    }
 
    addTodoHandler = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ value: '', completed: false });
    };

    toggleHandler = (event) => {
        this.props.toggleComplete(event.target.getAttribute('id'));
    }

    deleteTodo = (event) => {
        this.props.deleteTodo();
    }

    render() {
            return (
                <div>
                    <form onSubmit={this.addTodoHandler}>
                        <input id='input' onChange={this.handleInput} name='value' value={this.state.value}/>
                        <input type='submit' value='Add Task' onClick={this.addTodoHandler} />
                    </form>
                    <ul>
                        {this.props.todos.map((todo, i) => {
                            return (
                                <li key={i} id={i} className={todo.completed ? 'todo-completed' : ''} onClick={this.toggleHandler}>
                                {todo.value}
                                <button onClick={() => this.deleteTodo()}>X</button>
                                </li>
                                
                            );
                        })}
                    </ul>
                </div>
            );
    } 
} 
					
const mapStateToProps = (state) => {
	return {
        todos: state
	};
}

export default connect(mapStateToProps, { addTodo, toggleComplete, deleteTodo })(Todo); 