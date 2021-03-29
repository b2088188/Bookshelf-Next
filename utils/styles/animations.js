import { keyframes } from "styled-components";

const rotate = keyframes`
0%{
	transform:rotate(0deg);
}
50%{
	transform:rotate(180deg);
}
100%{
	transform:rotate(360deg);
}
`;

const blurOut = keyframes`
	0%{
		transform:scale(0);
	}
	50%{
		transform:scale(1.5);
	}
	100%{
		transform:scale(0);
	}
`;

export { rotate, blurOut };
