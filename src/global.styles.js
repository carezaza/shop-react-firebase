import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--dark-color: #20232a;
		--blueLight-color: #61dafb;
	}
	body {
		margin-top: 60px !important;
		overflow-x: hidden;
		background: #f7f7f7;
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}


	::-webkit-scrollbar {
		width: 8px;
	  }
	  
	  /* Track */
	  ::-webkit-scrollbar-track {
		background: #20232a;
	  }
	   
	  /* Handle */
	  ::-webkit-scrollbar-thumb {
		background: #61dafb; 
	  }

	  html {
		position: relative;
		min-height: 100%;
		font-family: sans-serif;
	  }
`;
