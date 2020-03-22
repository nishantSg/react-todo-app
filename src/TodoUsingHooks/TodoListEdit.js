import React from "react";
import useFormInput from "./hooks/FormControl";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const styles = {
	root: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
};

function EditTodo(props) {
	const { task, id, editTodo, setEditing, classes } = props;
	const [value, setValue, reset] = useFormInput(task);
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
				vaiant="filled"
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
