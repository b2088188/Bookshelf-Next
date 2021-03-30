import { client } from "utils/api-client";
import { useEffect } from "react";
import styled from "styled-components/macro";
import { useRouter } from "next/router";
import BookRow from "components/BookRow";
import { FullPageSpinner } from "components/Spinner";
import { getSession, useSession } from "next-auth/client";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

function Discover({ user }) {
	const {
		query: { q },
	} = useRouter();

	const { data: listItems } = useQuery({
		queryKey: "list-items",
		queryFn: () =>
			client(`/api/v1/list-items`, {
				headers: {
					user: "qazwsxedc9517538246@gmail.com",
				},
			}).then(({ data: { listItems } }) => listItems),
	});

	const { data: books } = useQuery({
		queryKey: "bookSearch",
		queryFn: () =>
			client(
				"/api/v1/books?" +
					new URLSearchParams({
						q,
					})
			).then(({ data: { books } }) => books),
		enabled: !!q,
		placeholderData: [],
	});

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
	return getSession({ req: context.req }).then(async (session) => {
		const {
			user: { email },
		} = session;

		const queryClient = new QueryClient();
		await queryClient.prefetchQuery("list-items", () =>
			client(`/api/v1/list-items`, {
				headers: {
					user: email,
				},
			}).then(({ data: { listItems } }) => listItems)
		);

		return {
			props: {
				dehydratedState: dehydrate(queryClient),
			},
		};
	});
}

export default Discover;
