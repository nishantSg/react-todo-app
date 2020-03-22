import React from "react";
import useFormInput from "./hooks/FormControl";
// import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SaveIcon from "@material-ui/icons/Save";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import Button from "@material-ui/core/Button";

const styles = {
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		paddingLeft: "8px",
		paddingRight: "8px",
	},
	icon: {
		margin: 10,
		color: "grey",
	},
	ButtonContainer: {
		width: "40%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
};

function TodoForm(props) {
	const [inputVal, setInputVal, reset] = useFormInput("");
	const { classes, addTodo } = props;

	const addAndUpdate = event => {
		event.preventDefault();
		addTodo(inputVal);
		reset();
	};
	return (
		<div>
			<form className={classes.root} onSubmit={addAndUpdate}>
				<FormatListBulletedIcon className={classes.icon} />
				<InputBase
					placeholder="New Todo"
					id="new-todo-input"
					value={inputVal}
					onChange={setInputVal}
					fullWidth
				/>
				<div className={classes.ButtonContainer}>
					<Button
						className={classes.Button}
						color="primary"
						onClick={reset}
						size="small"
					>
						Clear
					</Button>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.Button}
						size="small"
						startIcon={<SaveIcon />}
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
}

export default withStyles(styles)(TodoForm);
