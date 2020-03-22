import React from "react";
import Todo from "./Todo.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: {
		padding: 0,
		margin: 0,
	},
};

function TodoList(props) {
	const { todos, removeTodo, toggleTodo, editTodo, classes } = props;

	const listItems = todos.map(todo => (
		<div key={todo.id}>
			<ListItem dense divider className={classes.root}>
				<Todo
					todo={todo}
					removeTodo={removeTodo}
					toggleTodo={toggleTodo}
					editTodo={editTodo}
				/>
			</ListItem>
		</div>
	));

	return <List className={classes.root}>{listItems}</List>;
}

export default withStyles(styles)(TodoList);
