import React, { useState, useContext } from "react";
import TodoListEdit from "./TodoListEdit";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Checkbox from "@material-ui/core/Checkbox";
import { TodoContext } from "./context/firstContext";

const styles = {
	root: {
		padding: 0,
		margin: 0,
		boxSizing: "border-box",
	},
	ButtonContainer: {
		minWidth: "96px",
		minHeight: "48px",
	},
};

function Todo(props) {
	const [editing, setEditing] = useState(false);
	const { todo, classes } = props;
	const { removeTodo, toggleTodo } = useContext(TodoContext);

	const markupToBeReturned = editing ? (
		<TodoListEdit task={todo.task} id={todo.id} setEditing={setEditing} />
	) : (
		<>
			<ListItemIcon>
				<Checkbox
					checked={todo.completed}
					onClick={event => toggleTodo(todo.id)}
				/>
			</ListItemIcon>
			<ListItemText primary={todo.task} className={classes.root} />
			<div className={classes.ButtonContainer}>
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

export default withStyles(styles)(Todo);
