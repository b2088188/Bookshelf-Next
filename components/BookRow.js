import styled from "styled-components/macro";
import Link from "next/link";
import StatusButton from "./StatusButton";
function BookRow({ book }) {
	return (
		<li
			css={`
				border: solid 1px rgba(200, 200, 200, 0.7);
				border-radius: 5px;
				position: relative;

				&:hover {
					box-shadow: 1rem 1rem 1rem rgba(200, 200, 200, 0.7);
				}
			`}
		>
			<Link href={`/book/${book._id}`}>
				<a
					css={`
						display: flex;
						padding: 1rem;
					`}
				>
					<div
						css={`
							flex: 0 0 15rem;
							height: 22.5rem;
						`}
					>
						<img
							css={`
								width: 100%;
								height: 100%;
								vertical-align: middle;
							`}
							src={book.coverImageUrl}
							alt=""
						/>
					</div>
					<div
						css={`
							display: grid;
							grid-template-rows: repeat(2, min-content) 1fr;
							grid-template-columns: repeat(2, auto);
							justify-items: center;
							align-items: center;
							padding: 1rem;
						`}
					>
						<h2
							css={`
								color: var(--colors-text--main);
							`}
						>
							{book.title}
						</h2>
						<span
							css={`
								color: var(--colors-text--main);
							`}
						>
							{book.author}
						</span>
						<span
							css={`
								grid-row: 2/3;
								grid-column: 2/3;
								color: var(--colors-text--main);
							`}
						>
							{book.publisher}
						</span>
						<p
							css={`
								grid-row: 3/4;
								grid-column: 1/-1;
								color: var(--colors-text--main);
							`}
						>
							{shortSynopsis(book.synopsis)}
						</p>
					</div>
				</a>
			</Link>
			<div
				css={`
					position: absolute;
					top: 0;
					width: 5rem;
					height: 100%;
					right: -2.5rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-around;
				`}
			>
				<StatusButton />
			</div>
		</li>
	);
}

function shortSynopsis(synopsis, max = 70) {
	let arr = synopsis.split(" ");
	let count = 0;
	return (
		arr.reduce((acc, cur) => {
			if (count <= 70) {
				acc = acc + " " + cur;
				count++;
				return acc;
			}
			return acc;
		}, "") + "......"
	);
}

export default BookRow;
