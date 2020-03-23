import React, { useContext } from "react";
import useFormInput from "./hooks/FormControl";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { TodoContext } from "./context/firstContext";

const styles = {
	root: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
};

function EditTodo(props) {
	const { task, id, setEditing, classes } = props;
	const [value, setValue, reset] = useFormInput(task);
	const { editTodo } = useContext(TodoContext);

	const updateTodo = event => {
		event.preventDefault();
		editTodo(id, value);
		setEditing(false);
		reset();
	};

	return (
		<form onSubmit={updateTodo} className={classes.root}>
			<TextField
				value={value}
				onChange={setValue}
				variant="filled"
				fullWidth
				label="Edit Todo"
			/>
			<IconButton type="submit">
				<EditIcon />
			</IconButton>
		</form>
	);
}

export default withStyles(styles)(EditTodo);
