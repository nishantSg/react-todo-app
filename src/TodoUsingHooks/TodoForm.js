import React from "react";
import useFormInput from "./hooks/FormControl";
// import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import Button from "@material-ui/core/Button";

const styles = {
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	icon: {
		padding: 10,
		color: "grey"
	}
};

function TodoForm(props) {
	const [inputVal, setInputVal] = useFormInput("");
	const { classes } = props;
	return (
		<div>
			<FormControl className={classes.root}>
				<FormatListBulletedIcon className={classes.icon} />
				<InputBase
					placeholder="New Todo"
					id="new-todo-input"
					value={inputVal}
					onChange={setInputVal}
				/>
				<Button color="primary">Clear</Button>
				<Button color="primary">Save</Button>
			</FormControl>
		</div>
	);
}

export default withStyles(styles)(TodoForm);
