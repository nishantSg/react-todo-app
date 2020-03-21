import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { v4 as uuid } from "uuid";

export default function TodoApp() {
	let todos = [
		{ id: 1, task: "have to do something", completed: false },
		{ id: 2, task: "have to do something", completed: false },
		{ id: 3, task: "have to do something", completed: true }
	];

	const [allTodos, setAllTodos] = useState(todos);

	const addTodo = task => {
		const todo = { id: uuid(), task: task, completed: false };
		setAllTodos([...allTodos, todo]);
	};

	const removeTodo = id => {
		const newTodos = allTodos.filter(todo => todo.id !== id);
		setAllTodos(newTodos);
	};

	return (
		<div>
			<Paper>
				<Grid container justify="center">
					<Grid item xs={11}>
						<Paper>
							<TodoForm />
							<TodoList todos={allTodos} removeTodo={removeTodo} />
						</Paper>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
