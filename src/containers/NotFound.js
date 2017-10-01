import React from 'react';
import styled from 'styled-components';

import SocialMediaIcons from '../components/SocialMediaIcons';


const Container = styled.div`
	max-width: 480px;
	margin: auto;

	h2 {
		font-size: 18px;
		font-weight: normal;
	}

	li {
		list-style: none;
		margin: 16px 0px;
	}

	header {
		margin-bottom: 48px;
	}

	footer {
		margin-top: 48px;
	}
`;


const Wordmark = styled.h1`
	font-size: 52px;

	a {
		color: #000;
		text-decoration: none;
	}

	span.industrious {
		font-weight: normal;
	}
`;


export default class NotFound extends React.Component {
	render() {
		return (
			<Container>
				<header>
					<Wordmark>
						<a href="/">
							<span className="industrious">industrious</span><span className="one">one</span>
						</a>
					</Wordmark>
				</header>

				<div>
					<h3>What you seek, I cannot find.</h3>

					<p>Perhaps one of these links will help?</p>

					<ul>
						<li>
							<a href="http://getmusicality.com/">Musicality</a><br/>
							A streaming music player for macOS.
						</li>
						<li>
							<a href="https://premake.github.io/">Premake</a><br/>
							A build configuration tool for developers.
						</li>
					</ul>
				</div>

				<footer>
					<SocialMediaIcons />
				</footer>
			</Container>
		);
	}
}
