import React, { createContext } from "react";
import LocalStorageReducer from "../hooks/localStorageReducer";
import todoReducer from "../reducer/newReducer";

export const TodoContext = createContext();
export const TodoMethoodContext = createContext();

export function TodoContextProvider(props) {
	let todos = [{ id: 1, task: "Start Adding some todos", completed: false }];
	// const [allTodos, addTodo, removeTodo, toggleTodo, editTodo] = useTodo(todos);
	const [state, dispatch] = LocalStorageReducer("todos", todos, todoReducer);

	return (
		<TodoContext.Provider value={state}>
			<TodoMethoodContext.Provider value={dispatch}>
				{props.children}
			</TodoMethoodContext.Provider>
			>
		</TodoContext.Provider>
	);
}
