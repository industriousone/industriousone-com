import React from 'react';
import styled from 'styled-components';

import Rule from '../components/Rule';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Wordmark from '../components/Wordmark';


const Container = styled.div`
	text-align: center;
`;


const Content = styled.section`
	margin: 48px 12px;

	&>h2 {
		font-size: 18px;
		font-weight: normal;
		line-height: 1.2em;
	}

	&>h2:after {
		content: ".";
	}

	@media all and (min-width: 320px) {
		&>h2 {   /* scale with screen width */
			font-size: 6vw;
		}
	}

	@media all and (min-width: 500px) {
		&>h2 {   /* stop scaling with screen width */
			font-size: 26px;
		}
	}
`;


const StyledRule = styled(Rule)`
	margin-top: 72px;
	margin-bottom: 64px;
`;


export default class Home extends React.Component {
	render() {
		return (
			<Container>
				<header>
					<Wordmark />
				</header>

				<StyledRule />

				<Content>
					<h2>Software development <span className="amp">&amp;</span> consulting</h2>
				</Content>

				<footer>
					<SocialMediaIcons />
				</footer>
			</Container>
		);
	}
}

