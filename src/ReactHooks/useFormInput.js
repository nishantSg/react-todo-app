import { useState } from "react";

function useFormInput(initialVal = "") {
	const [input, setInput] = useState(initialVal);
	const handleChange = event => {
		setInput(event.target.value);
	};
	return [input, handleChange];
}

export { useFormInput };
