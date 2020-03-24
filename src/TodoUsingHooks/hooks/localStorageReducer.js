import { useReducer, useEffect } from "react";

function LocalStorageReducer(key, defaultVal, reducer) {
	const [state, dispatch] = useReducer(reducer, defaultVal, () => {
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
	}, [state, key]);

	return [state, dispatch];
}

export default LocalStorageReducer;
