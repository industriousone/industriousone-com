import React from 'react';
import {shallow} from 'enzyme';

import Rule from './Rule';


describe('<Rule/>', function() {

	it('renders without crashing', () => {
		shallow(<Rule/>);
	});

});
