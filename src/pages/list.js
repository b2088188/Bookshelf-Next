import ListItemList from "components/ListItemList";
import { getSession } from "next-auth/client";
import { client } from "utils/api-client";

function ReadingList({ listItems }) {
	const filteredListItems = listItems.filter((el) => !el.finishedDate);
	return <ListItemList filteredListItems={filteredListItems} />;
}

export async function getServerSideProps(context) {
	return getSession({ req: context.req }).then(async (session) => {
		const {
			user: { email },
		} = session;
		const {
			data: { listItems },
		} = await client(`/api/v1/list-items`, {
			headers: {
				user: email,
			},
		});
		return {
			props: { listItems },
		};
	});
}

export default ReadingList;
