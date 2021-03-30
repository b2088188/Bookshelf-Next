import { GET_LISTITEMS_REQUESTED, GET_LISTITEMS_RESOLVED } from "actions/types";

let InitialState = {
	listItems: [],
	status: "idle",
	error: null,
};

function listItemsReducer(currentState = InitialState, action) {
	switch (action.type) {
		case GET_LISTITEMS_REQUESTED:
			return {
				...currentState,
				status: "pending",
			};
		case GET_LISTITEMS_RESOLVED:
			return {
				...currentState,
				listItems: action.payload.listItems,
				status: "resolved",
			};
		default:
			return currentState;
	}
}

export default listItemsReducer;
