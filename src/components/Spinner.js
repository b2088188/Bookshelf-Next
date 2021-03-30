import styled from "styled-components/macro";
import { rotate } from "utils/styles/animations";

function FullPageSpinner() {
	return (
		<div
			css={`
				min-height: 100vh;
				font-size: 5rem;
				display: flex;
				justify-content: center;
				align-items: center;
				& > * {
					animation: ${rotate} 1s linear infinite;
				}
			`}
		>
			<i className="fas fa-spinner"></i>
		</div>
	);
}

export { FullPageSpinner };
