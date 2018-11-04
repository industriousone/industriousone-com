import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Rule from '../components/Rule';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Wordmark from '../components/Wordmark';


const Container = styled.div`
	text-align: center;
`;


const Content = styled.section`
	margin: 48px 12px;
	text-align: left;
`;


const Header = styled.section`
	font-family: "ITCAmericanTypewriter";
	font-size: 32px;
	padding: 12px;

	&>a {
		color: black;
		text-decoration: none;
	}
`;


const StyledRule = styled.hr`
	border: none;
	border-top: 1px solid #ccc;
`;


export default class Home extends React.Component {
	render() {
		return (
			<Container>
				<Header>
					<Link to="/">industrious<b>one</b></Link>
				</Header>

				<StyledRule />

				<Content>
					<h1>Privacy Policy</h1>

					<p>
						<em>I believe in a right to privacy, for everyone. Your data is your 
						business and I’m happy to leave it in your capable hands.</em>
					</p>

					<p>
						<em>In order to create and sell Musicality, and to provide quality support,
						I do need to collect and retain some personal information. I will never 
						share this information with third parties, except as needed to offer Musicality
						for sale, and to provide you with support after.</em>
					</p>

					<h2>Software Sales</h2>

					<p>
						<em>At no point do I ever see your credit card number, expiration date, or CVV code.</em>
					</p>

					<p>
						If you purchase Musicality through the in-app purchase screen, or via our website, your 
						purchase is processed by <a href="https://fastspring.com">FastSpring</a>, a company with
						an excellent track record and <a href="https://fastspring.com/privacy/">a strong privacy 
						policy</a>. Once the purchase is complete, I receive a copy of the receipt which includes
						your full name, postal and email address, phone number, and company name (if provided). I
						retain this information to identify you as the owner of a Musicality license, in case you 
						contact me for support, or ask me to resend your license code should you lose it.
					</p>

					<p>
						If you “purchase” (it’s free) Musicality Remote through Apple’s iOS App Store, your payment 
						information is processed by Apple, who have <a href="https://www.apple.com/legal/privacy/en-ww/">their
						own privacy policy</a>. In this case I receive no information about you at all.
					</p>

					<h2>Support Requests</h2>

					<p>
						When you contact me for support, I receive your email address and any information you choose 
						to provide. I may archive this information, in case you contact me in the future with a similar 
						problem, or to help identify and diagnose larger issues that impact more people.
					</p>

					<p>
						Depending on the issue, I may ask you to send Musicality’s log file to help diagnose the source 
						of the problem; see “Log Files” for more information. This is often helpful but always optional.
					</p>

					<p>
						I use <a href="https://fastmail.com">FastMail</a> to handle my email; you can read {' '}
						<a href="https://www.fastmail.com/about/privacy.html">their privacy policy here</a>.
					</p>

					<h2>Log Files</h2>

					<p>
						To help diagnose issues, should they arise, Musicality keeps a log of its activity in a file 
						on your computer. This log file can contain information about the music which you have 
						streamed using Musicality, as well as the names of AirPlay devices on your network. It does not 
						contain user names, passwords, or anything that could personally identify you. A new file is 
						started each time Musicality is launched, and the old file is erased.
					</p>

					<p>
						The log file is stored at <b>~/Library/Application Support/Musicality/Musicality.log</b> in 
						plain text and may viewed at any time.
					</p>

					<h2>Crash Reports</h2>

					<p>
						If Musicality crashes, it will ask if you would like to send a crash report. These reports 
						contain information about the state of the app and device at the time it crashed. They do not 
						contain any personally identifiable information. You are also given an opportunity to provide 
						your name and email address, which may be used to follow up with you regarding the crash.
					</p>

					<p>
						I use <a href="https://hockeyapp.net">HockeyApp</a> to collect and aggregate crash reports; 
						you can find <a href="https://privacy.microsoft.com/en-us/PrivacyStatement">their privacy policy 
						here</a>. I keep crash reports only for the last few releases of Musicality, after which they are deleted.
					</p>

					<h2>Software Updates</h2>

					<p>
						Musicality periodically checks to see if news or a newer version is available. To perform 
						this check, it sends a small amount of metadata including the current version number and 
						which news update was last seen. This information is not 
						captured or stored after the initial request, and is not personally identifiable.
					</p>

					<h2>Analytics</h2>

					<p>
						The Industrious One websites and downloadable files are hosted on servers which keep 
						aggregate logs such as the number of times that a particular file is requested. I may 
						use this information to determine which pages are being visited, and which downloads 
						are popular. I avoid using services which require browser cookies, and no personally 
						identifiable information is captured or retained.
					</p>

					<h2>Email List</h2>

					<p>
						The Musicality website allows you to sign up for a email list in order to receive news 
						and updates, which I send rarely, and only when I have something useful to announce. 
					</p>

					<p>
					I use <a href="https://mailchimp.com">MailChimp</a> to collect and manage this list of 
					addresses, and provide mailing services. They have both 
					a <a href="https://mailchimp.com/legal/privacy/">privacy policy</a> and 
					a <a href="https://mailchimp.com/about/security/">security policy</a>.
					</p>

					<h2>Getting in Touch</h2>

					<p>
						If you would like any or all of your information to be removed or corrected, 
						please contact me 
						at <a href="mailto:hello@industriousone.com">hello@industriousone.com</a> and 
						I will be happy to help.
					</p>

					<p>
						<em>This privacy policy might changed or be edited for clarity from time to time; 
						you can always find the latest version here. As always, feel free 
						to <a href="mailto:hello@industriousone.com">contact me</a> if you have any 
						questions and I’ll be happy to help out. I last modified it on 3 Nov 2018.</em>
					</p>
				</Content>
			</Container>
		);
	}
}

