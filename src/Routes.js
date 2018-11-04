import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Privacy from './containers/Privacy';


export default class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/privacy" component={Privacy} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}
