import React, { useEffect } from "react";
import { useTodo } from "./hooks/useTodo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
	let todos = JSON.parse(window.localStorage.getItem("todos") || "[]");

	const [allTodos, addTodo, removeTodo, toggleTodo, editTodo] = useTodo(todos);

	useEffect(() => {
		window.localStorage.setItem("todos", JSON.stringify(allTodos));
	}, [allTodos]);

	return (
		<Grid container justify="center">
			<Grid item xs={11} md={8} lg={6}>
				<Paper>
					<TodoForm addTodo={addTodo} />
					<TodoList
						todos={allTodos}
						removeTodo={removeTodo}
						toggleTodo={toggleTodo}
						editTodo={editTodo}
					/>
				</Paper>
			</Grid>
		</Grid>
	);
}
