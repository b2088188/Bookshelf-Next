import React from "react";
import styled from "styled-components/macro";
import { client } from "../../utils/api-client";

function Book({ book }) {
	return (
		<div
			css={`
				max-width: 60rem;
				margin: auto;
				display: grid;
				grid-gap: 2.5rem 0;
			`}
		>
			<div
				css={`
					display: grid;
					grid-template-columns: min-content auto;
					grid-gap: 0 2.5rem;
				`}
			>
				<div
					css={`
						width: 20rem;
					`}
				>
					<img
						css={`
							width: 100%;
						`}
						src="https://images-na.ssl-images-amazon.com/images/I/514tG8HMsrL._SX317_BO1,204,203,200_.jpg"
						alt=""
					/>
				</div>
				<div
					css={`
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					`}
				>
					<div
						css={`
							display: flex;
							justify-content: space-between;
							align-items: center;
						`}
					>
						<div>
							<h1
								css={`
									color: var(--colors-text--main);
									font-size: 2.5rem;
								`}
							>
								Anna Karenina
							</h1>
							<span
								css={`
									color: var(--colors-text--main);
									font-size: 1.5rem;
								`}
							>
								Leo Tolstoy|Wordsworth Editions
							</span>
						</div>
						<div
							css={`
								display: flex;
								flex-direction: column;
								justify-content: space-around;
							`}
						>
							<button
								css={`
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
								<i className="fas fa-plus-circle"></i>
							</button>
						</div>
					</div>
					<div
						css={`
							font-size: 1.5rem;
							color: var(--colors-text--main);
						`}
					>
						<i className="far fa-calendar-alt"></i> Mar 21
					</div>
					<div>
						<p
							css={`
								color: var(--colors-text--main);
								font-size: 1.5rem;
							`}
						>
							A famous legend surrounding the creation of Anna Karenina tells us
							that Tolstoy began writing a cautionary tale about adultery and
							ended up by falling in love with his magnificent heroine. It is
							rare to find a reader of the book who doesn't experience the same
							kind of emotional upheaval: Anna Karenina is filled with major and
							minor characters who exist in their own right and fully embody
							their mid-nineteenth-century Russian milieu, but it still belongs
							entirely to the woman whose name it bears, whose portrait is one
							of the truest ever made by a writer.
						</p>
					</div>
				</div>
			</div>
			<div
				css={`
					display: flex;
					flex-direction: column;
					color: var(--colors-text--main);
				`}
			>
				<label
					htmlFor="notes"
					css={`
						font-size: 1.7rem;
						font-weight: 700;
					`}
				>
					Notes
				</label>
				<textarea
					id="notes"
					cols="30"
					rows="7"
					css={`
						color: currentColor;
						font-size: 17px;
						font-family: inherit;
						padding: 1rem;
						border: solid 1px rgba(200, 200, 200, 0.7);
						background: var(--colors-background--sub);
					`}
				/>
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	const {
		params: { bookId },
	} = context;
	try {
		const {
			data: { book },
		} = await client(`/api/v1/books/${bookId}`);

		return {
			props: { book },
		};
	} catch (err) {
		console.log(err);
	}
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default Book;
