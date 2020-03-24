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
	const state = useContext(TodoContext);

	const listItems = state.map(todo => (
		<React.Fragment key={todo.id}>
			<ListItem dense divider className={classes.root}>
				<Todo todo={todo} />
			</ListItem>
		</React.Fragment>
	));

	return <List className={classes.root}>{listItems}</List>;
}

export default withStyles(styles)(TodoList);
