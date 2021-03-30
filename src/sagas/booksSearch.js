import { call, put, takeEvery } from "redux-saga/effects";
import { client } from "utils/api-client";
import { BOOKS_SEARCH_RESOLVED, BOOKS_SEARCH_REQUESTED } from "actions/types";

function* fetchBookSearch(action) {
	try {
		const {
			data: { books },
		} = yield call(client, "/api/v1/books", {
			params: { q: action.payload.q },
		});
		yield put({ type: BOOKS_SEARCH_RESOLVED, payload: { books } });
	} catch (err) {
		console.log(err);
	}
}

function* mySaga() {
	yield takeEvery(BOOKS_SEARCH_REQUESTED, fetchBookSearch);
}

export default mySaga;
