import React from "react";
import { useFormInput } from "./useFormInput";

export default function FormInput() {
	const [value, setValue] = useFormInput("");
	return (
		<div>
			<form action="submit">
				<input type="text" value={value} onChange={setValue} />
			</form>
		</div>
	);
}
