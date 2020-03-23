import React, { useContext } from "react";
import Todo from "./Todo.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import { TodoContext } from "./context/firstContext";

const styles = {
	root: {
		padding: 0,
		margin: 0,
	},
};

function TodoList(props) {
	const { classes } = props;
	const { allTodos } = useContext(TodoContext);

	const listItems = allTodos.map(todo => (
		<div key={todo.id}>
			<ListItem dense divider className={classes.root}>
				<Todo todo={todo} />
			</ListItem>
		</div>
	));

	return <List className={classes.root}>{listItems}</List>;
}

export default withStyles(styles)(TodoList);
