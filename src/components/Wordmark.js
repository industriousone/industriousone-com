import React from 'react';
import styled from 'styled-components';


const Container = styled.h1`
	font-size: 51px;
	line-height: 0.65em;
	margin-left: 6px;
	text-align: left;
	text-transform: lowercase;

	&>span {
		display: block;        /* break into two lines */
	}

	&>span:first-child {
		padding-left: 0.1em;   /* vertically align "i" with "o" */
	}


	&>span.tighten {
		letter-spacing: -0.045em;   /* clean up some kerning */
	}

	@media all and (min-width: 320px) {  /* scale with screen width */
		font-size: 15vw;
		margin-left: 2vw;
	}

	@media all and (min-width: 960px) { /* stop scaling with screen width */
		font-size: 154px;
		margin-left: 16px;
	}
`;


export default class Wordmark extends React.Component
{
	render() {
		return (
			<Container>
				<span>I<span className="tighten">nd</span>ustr<span className="tighten">io</span>us</span> <span className="tighten">One</span>
			</Container>
		);
	}
};
