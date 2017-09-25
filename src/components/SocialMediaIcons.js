import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

import email from '../assets/email.svg';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';


///
// Display icons four across if the screen is wide enough, else in columns of two.
///
const Container = styled.div`
	margin: auto;
	width: 200px;

	@media all and (min-width: 400px) {
		width: 400px;
	}
`;

const StyledIcon = styled(Icon)`
	width: 72px;
	height: 72px;
	margin: 6px;
`;



export default class SocialMediaIcons extends React.Component
{
	render() {
		return (
			<Container>
				<StyledIcon img={twitter} url="https://twitter.com/industrious" alt="Twitter" title="Industrious One on Twitter" />
				<StyledIcon img={facebook} url="https://www.facebook.com/industriousone/" alt="Facebook" title="Industrious One on Facebook" />
				<StyledIcon img={github} url="https://github.com/industriousone" alt="GitHub" title="Industrious One on GitHub" />
				<StyledIcon img={email} url="mailto:hello@industriousone.com" alt="Email" title="Email me" />
			</Container>
		);
	}
}
