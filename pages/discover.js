import styled from "styled-components/macro";

function Discover() {
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
			<ul></ul>
		</div>
	);
}

export default Discover;
