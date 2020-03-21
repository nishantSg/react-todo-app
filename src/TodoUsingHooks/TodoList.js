import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

const styles = {
	root: {}
};

function TodoList(props) {
	const { classes, todos, removeTodo } = props;

	const TodoList = todos.map(todo => (
		<>
			<ListItem key={todo.id}>
				<ListItemIcon>
					<Checkbox checked={todo.completed} />
				</ListItemIcon>
				<ListItemText>{todo.task}</ListItemText>
				<ListItemSecondaryAction>
					<IconButton aria-label="edit-todo">
						<EditIcon />
					</IconButton>
					<IconButton aria-label="delete-todo">
						<DeleteIcon onClick={event => removeTodo(todo.id)} />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
			<Divider />
		</>
	));

	return <List>{TodoList}</List>;
}

export default withStyles(styles)(TodoList);
