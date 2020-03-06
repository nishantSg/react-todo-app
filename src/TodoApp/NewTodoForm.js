import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class TodoFrom extends Component {
	constructor(props) {
		super(props);
		this.state = { task: "" };
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = event => {
		event.preventDefault();
		if (this.state.task) {
			this.props.create({ ...this.state, id: uuidv4(), completed: false });
			this.setState({ task: "" });
		}
	};
	render() {
		return (
			<form action="submit" onSubmit={this.handleSubmit}>
				<label htmlFor="NewTask">NewTask</label>
				<input
					type="text"
					name="task"
					id="NewTask"
					value={this.state.task}
					onChange={this.handleChange}
					placeholder="Something Written here."
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default TodoFrom;
