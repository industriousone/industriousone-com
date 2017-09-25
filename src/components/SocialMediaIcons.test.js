import React from 'react';
import {shallow} from 'enzyme';

import SocialMediaIcons from './SocialMediaIcons';


describe('<SocialMediaIcons/>', function() {

	it('renders without crashing', () => {
		shallow(<SocialMediaIcons />);
	});

});
