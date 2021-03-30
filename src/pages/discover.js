import { useEffect } from "react";
import styled from "styled-components/macro";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { BOOKS_SEARCH_REQUESTED } from "actions/types";
import { getSession } from "next-auth/client";
import BookRow from "components/BookRow";
import { FullPageSpinner } from "components/Spinner";

function Discover() {
	const {
		query: { q },
	} = useRouter();
	const { books, status, error } = useSelector((state) => state.booksSearch);
	const isIdle = status === "idle";
	const isLoading = status === "pending";
	const isSuccess = status === "resolved";
	const dispatch = useDispatch();
	useEffect(() => {
		if (q === "") return;
		dispatch({ type: BOOKS_SEARCH_REQUESTED, payload: { q } });
	}, [q]);

	if (isIdle || isLoading) return <FullPageSpinner />;
	if (isSuccess)
		return (
			<div
				css={`
					max-width: 60rem;
					margin: auto;
				`}
			>
				<div
					css={`
						text-align: center;
						line-height: 1.7;
						margin-bottom: 2.5rem;
						color: var(--colors-text--main);
					`}
				>
					<p
						css={`
							font-size: 1.5rem;
						`}
					>
						Welcome to the discover page.
					</p>
					<p
						css={`
							font-size: 1.5rem;
						`}
					>
						Here, let me load a few books for you...
					</p>
					<p
						css={`
							font-size: 1.5rem;
						`}
					>
						Here you go! Find more books with the search bar above.
					</p>
				</div>
				<ul
					css={`
						& > *:not(:last-child) {
							margin-bottom: 1.5rem;
						}
					`}
				>
					{books.map((book) => (
						<BookRow key={book._id} book={book} />
					))}
				</ul>
			</div>
		);
}

export function getServerSideProps(context) {
	return getSession({ req: context.req }).then((session) => {
		if (!session)
			return {
				redirect: {
					destination: "/",
					permanent: false,
				},
			};
		return {
			props: { session },
		};
	});
}

export default Discover;
