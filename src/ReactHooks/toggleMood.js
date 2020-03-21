import React from "react";
import { useToggle } from "./toggleHook";

export default function ToggleHook(props) {
	const [mood, setMood] = useToggle(false);
	return (
		<div>
			<h2 onClick={setMood}>{mood ? "Happy" : "Sad"}</h2>
		</div>
	);
}
