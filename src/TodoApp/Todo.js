import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, task: this.props.task };
	}
	handleDelete = event => {
		this.props.delete(this.props.id);
	};

	handleUpdate = event => {
		event.preventDefault();
		this.props.update(this.props.id, this.state.task);
		this.isEditing(event);
	};

	isEditing = event => {
		this.setState({ isEditing: !this.state.isEditing });
	};
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	toggleCompletion = event => {
		this.props.handleCompletion(this.props.id);
	};
	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<form onSubmit={this.handleUpdate}>
					<input
						type="text"
						value={this.state.task}
						onChange={this.handleChange}
						name="task"
					/>
					<button onClick={this.handleUpdate}>Done</button>
				</form>
			);
		} else {
			result = (
				<div>
					<p
						className={this.props.completed ? "completed" : ""}
						onClick={this.toggleCompletion}
					>
						{this.state.task}
					</p>
					<button onClick={this.isEditing}>Edit</button>
					<button onClick={this.handleDelete}>Delete</button>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
