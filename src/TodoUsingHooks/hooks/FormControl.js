import { useState } from "react";

export default function useFormInput(initialVal = "") {
	const [value, setValue] = useState(initialVal);

	const handleChange = event => {
		setValue(event.target.value);
	};
	return [value, handleChange];
}
