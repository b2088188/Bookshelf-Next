import { combineReducers } from "redux";
import booksSearchReducer from "./bookSearchReducer";
import listItemsReducer from "./listItemsReducer";

export default combineReducers({
	booksSearch: booksSearchReducer,
	listItems: listItemsReducer,
});
