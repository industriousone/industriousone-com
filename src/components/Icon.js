import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const AnchorBox = styled.a`
	display: inline-block;
	width: 48px;
	height: 48px;
	margin: 4px;
`;


export default class Icon extends React.Component
{
	render() {
		return (
			<AnchorBox className={this.props.className} href={this.props.url}>
				<img src={this.props.img} alt={this.props.alt} title={this.props.title} />
			</AnchorBox>
		);
	}
};


Icon.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	img: PropTypes.string.isRequired,
	title: PropTypes.string,
	url: PropTypes.string.isRequired
};
