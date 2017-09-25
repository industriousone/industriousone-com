import React from 'react';
import {shallow} from 'enzyme';

import Wordmark from './Wordmark';


describe('<Wordmark/>', function() {

	it('renders without crashing', () => {
		shallow(<Wordmark/>);
	});

});
