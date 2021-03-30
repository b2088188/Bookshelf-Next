import {
	BOOKS_SEARCH_REQUESTED,
	BOOKS_SEARCH_RESOLVED,
} from "../actions/types";

let InitialState = {
	books: [],
	status: "idle",
	error: null,
};

function bookSearchReducer(currentState = InitialState, action) {
	switch (action.type) {
		case BOOKS_SEARCH_REQUESTED:
			return {
				...currentState,
				status: "pending",
			};
		case BOOKS_SEARCH_RESOLVED:
			return {
				...currentState,
				books: action.payload.books,
				status: "resolved",
			};
		default:
			return currentState;
	}
}

export default bookSearchReducer;
