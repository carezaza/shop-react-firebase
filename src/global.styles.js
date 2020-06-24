import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		margin-top: 110px !important;
		margin-bottom: 150px !important;
		overflow-x: hidden;
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
