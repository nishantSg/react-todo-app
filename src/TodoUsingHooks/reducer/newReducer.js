// A reducer is a function which takes the **current value of the state**
// and **an action to be performed on the state**
// and **returns a new value of the state** which will then be used
// as initial value next time when the reducer is called.
// The useReducer hook returns the state and a reducer function
import { v4 as uuid } from "uuid";

function todoReducer(state, action) {
	switch (action.type) {
		case "ADD":
			return [...state, { id: uuid(), task: action.task, completed: false }];
		case "REMOVE":
			return state.filter(todo => todo.id !== action.id);
		case "TOGGLE":
			return state.map(todo =>
				todo.id === action.id
					? { ...state, completed: !state.completed }
					: state
			);
		case "EDIT":
			state.map(todo => {
				return todo.id === action.id ? { ...todo, task: action.task } : state;
			});
			break;
		default:
			return state;
	}
}

export default todoReducer;
