import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
	let TodoList = [
		{ id: 1, task: "have to do something", completed: false },
		{ id: 2, task: "have to do something", completed: false },
		{ id: 3, task: "have to do something", completed: true }
	];

	return (
		<div>
			<Paper>
				<Grid container justify="center">
					<Grid item xs={11}>
						<Paper>SomeText</Paper>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
