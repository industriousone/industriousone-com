import React from 'react';
import {mount} from 'enzyme';

import Icon from './Icon';


describe('<Icon/>', function() {

	let icon;


	beforeEach(() => {
		icon = mount(<Icon className="newClass" img="twitter.svg" url="https://twitter.com/industrious" alt="Twitter" title="Industrious One on Twitter"/>);
	});


	it('sets link destination', () => {
		expect(icon.find('a').prop('href')).toBe('https://twitter.com/industrious');
	});


	it('sets the image source', () => {
		expect(icon.find('img').prop('src')).toBe('twitter.svg');
	});


	it('sets the image alt text', () => {
		expect(icon.find('img').prop('alt')).toBe('Twitter');
	});


	it('sets the image title', () => {
		expect(icon.find('img').prop('title')).toBe('Industrious One on Twitter');
	});


	it('can override class name', () => {
		expect(icon.find('a.newClass').length).toBe(1);
	});

});
