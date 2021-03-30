import styled from "styled-components/macro";

import BookRow from "./BookRow";
import { useDispatch, useSelector } from "react-redux";
import { GET_LISTITEMS_REQUESTED, GET_LISTITEMS_RESOLVED } from "actions/types";

function ListItemList({ filteredListItems }) {
	return (
		<ul
			css={`
				max-width: 60rem;
				margin: auto;
			`}
		>
			{filteredListItems.map((el) => {
				return <BookRow key={el.book._id} book={el.book} />;
			})}
		</ul>
	);
}

export default ListItemList;
