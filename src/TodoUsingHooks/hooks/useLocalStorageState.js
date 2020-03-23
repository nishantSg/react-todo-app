import { useState, useEffect } from "react";

export function useLocalStorageState(key, defaultVal) {
	const [state, setState] = useState(() => {
		let value;
		try {
			value = JSON.parse(
				window.localStorage.getItem(key) || String(defaultVal)
			);
		} catch (error) {
			value = defaultVal;
		}
		return value;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
		console.log("useEffect is running.");
	}, [key, state]);

	return [state, setState];
}
