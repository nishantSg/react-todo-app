import React, { useState } from "react";
import TodoListEdit from "./TodoListEdit";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Checkbox from "@material-ui/core/Checkbox";

function Todo(props) {
	const [editing, setEditing] = useState(false);
	const { todo, removeTodo, toggleTodo, editTodo } = props;

	const markupToBeReturned = editing ? (
		<TodoListEdit
			task={todo.task}
			id={todo.id}
			editTodo={editTodo}
			setEditing={setEditing}
		/>
	) : (
		<>
			<ListItemIcon>
				<Checkbox
					checked={todo.completed}
					onClick={event => toggleTodo(todo.id)}
				/>
			</ListItemIcon>
			<ListItemText primary={todo.task} />
			<div>
				<IconButton aria-label="edit-todo" onClick={() => setEditing(!editing)}>
					<EditIcon />
				</IconButton>
				<IconButton
					aria-label="delete-todo"
					onClick={event => removeTodo(todo.id)}
				>
					<DeleteIcon />
				</IconButton>
			</div>
		</>
	);
	return <>{markupToBeReturned}</>;
}

export default Todo;
