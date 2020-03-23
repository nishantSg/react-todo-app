import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TodoContextProvider } from "./context/firstContext";

export default function TodoApp() {
	// let todos = JSON.parse(window.localStorage.getItem("todos") || "[]");
	// const [allTodos, addTodo, removeTodo, toggleTodo, editTodo] = useTodo(todos);

	return (
		<Grid container justify="center">
			<Grid item xs={11} md={8} lg={6}>
				<Paper>
					<TodoContextProvider>
						<TodoForm />
						<TodoList />
					</TodoContextProvider>
				</Paper>
			</Grid>
		</Grid>
	);
}
