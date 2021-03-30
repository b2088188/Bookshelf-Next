import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body[data-theme='light'] {
	--colors-text--main:#030303;
  --colors-background--main: #f9f9f9;
  --colors-background--sub: #fff;
 --colors-background--list:#f1f1f4;
}
body[data-theme='dark'] {
	--colors-text--main:#fff;
 --colors-background--main: #181818;
 --colors-background--sub: #202020;
 --colors-background--list:#616161;
}
	html{
		font-size:62.5%;
		font-family: 'Open Sans', sans-serif;
	}
	html,
	body{
		height:100%;
		box-sizing:border-box;
	}
	*,
	*:before,
	*:after{
		margin:0;
		padding:0;
		list-style:none;
		box-sizing:inherit;
	}
	a{
		text-decoration:none;
	}
`;

export default GlobalStyle;
