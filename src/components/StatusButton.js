import { useQuery, useMutation, useQueryClient } from "react-query";
import styled from "styled-components/macro";
import { useAsync } from "customhooks/useAsync";
import { useSession } from "next-auth/client";
import { client } from "utils/api-client";
import { Spinner } from "components/Spinner";

function TooltipButton({ icon, onClick }) {
	const { run, isLoading } = useAsync();

	return (
		<button
			onClick={() => run(onClick())}
			css={`
				z-index: 11;
				position: relative;
				color: var(--colors-text--main);
				font-size: 1.7rem;
				background: none;
				border: solid 1px rgba(200, 200, 200, 0.7);
				padding: 1rem;
				border-radius: 50%;
				display: flex;
				align-items: center;
				&:hover {
					color: #3f5eb5;
					cursor: pointer;
				}
				&:focus {
					outline: none;
				}
			`}
		>
			{isLoading ? <Spinner /> : icon}
		</button>
	);
}

function StatusButton({ book }) {
	const queryClient = useQueryClient();
	const { data: listItems } = useQuery({
		queryKey: "list-items",
		queryFn: () =>
			client(`/api/v1/list-items`, {
				headers: {
					user: "qazwsxedc9517538246@gmail.com",
				},
			}).then(({ data: { listItems } }) => listItems),
		placeholderData: [],
	});

	const listItem = listItems.find((el) => el.book === book._id);

	const { mutateAsync: create } = useMutation(
		() =>
			client(`/api/v1/list-items`, {
				data: {
					user: "qazwsxedc9517538246@gmail.com",
					bookId: book._id,
				},
			}),
		{
			onSettled: () => queryClient.invalidateQueries("list-items"),
		}
	);

	const { mutateAsync: remove } = useMutation(
		({ listItemId }) =>
			client(`/api/v1/list-items/${listItemId}`, {
				method: "DELETE",
			}),
		{
			onSettled: () => queryClient.invalidateQueries("list-items"),
		}
	);

	return (
		<>
			{listItem ? (
				listItem.finishedDate ? (
					<TooltipButton icon={<i class="fas fa-book"></i>} />
				) : (
					<TooltipButton icon={<i class="fas fa-check-circle"></i>} />
				)
			) : null}
			{listItem ? (
				<TooltipButton
					onClick={() => remove({ listItemId: listItem._id })}
					icon={<i className="fas fa-minus-circle"></i>}
				/>
			) : (
				<TooltipButton
					onClick={() => create()}
					icon={<i class="fas fa-plus-circle"></i>}
				/>
			)}
		</>
	);
}

export default StatusButton;
