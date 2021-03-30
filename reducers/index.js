import { combineReducers } from "redux";
import booksSearchReducer from "./bookSearchReducer";
export default combineReducers({
	booksSearch: booksSearchReducer,
});
