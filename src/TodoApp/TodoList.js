import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./NewTodoForm";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
	}
	handleCreate = newTodo => {
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	handleDelete = id => {
		this.setState(state => {
			let arr = [...state.todos];
			return { todos: arr.filter(todo => todo.id !== id) };
		});
	};

	handleUpdate = (id, updatedTask) => {
		let updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask, completed: false };
			} else return todo;
		});
		this.setState({ todos: updatedTodos });
	};

	handleCompletion = id => {
		let updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			} else return todo;
		});
		this.setState({ todos: updatedTodos });
	};

	render() {
		return (
			<div>
				<ul>
					{this.state.todos.map(todo => {
						return (
							<Todo
								id={todo.id}
								task={todo.task}
								completed={todo.completed}
								key={todo.id}
								delete={this.handleDelete}
								update={this.handleUpdate}
								handleCompletion={this.handleCompletion}
							/>
						);
					})}
				</ul>
				<TodoForm create={this.handleCreate} />
			</div>
		);
	}
}

export default TodoList;
