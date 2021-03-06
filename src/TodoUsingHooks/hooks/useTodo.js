import { v4 as uuid } from "uuid";
import { useLocalStorageState } from "./useLocalStorageState";

function useTodo(todos) {
	const [allTodos, setAllTodos] = useLocalStorageState("todos", todos);

	const addTodo = task => {
		const todo = { id: uuid(), task: task, completed: false };
		setAllTodos([...allTodos, todo]);
	};

	const removeTodo = id => {
		const newTodos = allTodos.filter(todo => todo.id !== id);
		setAllTodos(newTodos);
	};

	const toggleTodo = id => {
		const updatedTodos = allTodos.map(todo =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
		setAllTodos(updatedTodos);
	};

	const editTodo = (id, task) => {
		const newTodo = allTodos.map(todo => {
			if (todo.id === id) {
				return { ...todo, task: task };
			}
			return todo;
		});
		setAllTodos(newTodo);
	};

	return [allTodos, addTodo, removeTodo, toggleTodo, editTodo];
}

export { useTodo };
