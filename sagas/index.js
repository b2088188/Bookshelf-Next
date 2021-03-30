import { all } from "redux-saga/effects";
import booksSearch from "./booksSearch";

function* rootSaga() {
	yield all([booksSearch()]);
}

export default rootSaga;
