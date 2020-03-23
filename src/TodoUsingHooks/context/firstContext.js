import React, { createContext } from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoContext = createContext();

export function TodoContextProvider(props) {
	let todos = [{ id: 1, task: "Start Adding some todos", completed: false }];
	const [allTodos, addTodo, removeTodo, toggleTodo, editTodo] = useTodo(todos);

	return (
		<TodoContext.Provider
			value={{ allTodos, addTodo, removeTodo, toggleTodo, editTodo }}
		>
			{props.children}
		</TodoContext.Provider>
	);
}
