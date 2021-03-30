import styled from "styled-components/macro";
function TooltipButton({ icon }) {
	return (
		<button
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
			{icon}
		</button>
	);
}

function StatusButton({ book }) {
	const listItem = null;
	const finishedDate = null;
	return (
		<>
			{listItem ? (
				finishedDate ? (
					<TooltipButton icon={<i class="fas fa-book"></i>} />
				) : (
					<TooltipButton icon={<i class="fas fa-check-circle"></i>} />
				)
			) : null}
			{listItem ? (
				<TooltipButton icon={<i className="fas fa-minus-circle"></i>} />
			) : (
				<TooltipButton icon={<i class="fas fa-plus-circle"></i>} />
			)}
		</>
	);
}

export default StatusButton;
