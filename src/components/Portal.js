import styled from "styled-components/macro";
import { createPortal } from "react-dom";

function Portal({ children, isOpen }) {
	if (!isOpen) return null;
	return createPortal(
		<div
			css={`
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			`}
		>
			{children}
		</div>,
		document.getElementById("root")
	);
}

export { Portal };
