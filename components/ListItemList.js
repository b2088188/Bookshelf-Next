import styled from "styled-components/macro";
import BookRow from "./BookRow";

function ListItemList() {
	return (
		<ul
			css={`
				max-width: 60rem;
				margin: auto;
			`}
		>
			<BookRow
				book={{
					_id: "123",
					coverImageUrl:
						"https://images-na.ssl-images-amazon.com/images/I/51clgmTURAL._SX321_BO1,204,203,200_.jpg",
					title: "A Bear Called Paddington",
					author: "Michael Bond",
					publisher: "HarperCollins",
					synopsis:
						"Paddington Bear had just traveled all the way from Peru when the Brown family first met him in Paddington Station. Since then, their lives have never been quite the same . . . for ordinary things become extraordinary when Paddington is involved.",
				}}
			/>
		</ul>
	);
}

export default ListItemList;
