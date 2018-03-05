import React from 'react';
// router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import RecipePage from './RecipePage';

export default class App extends React.Component {	
	render() {
		return (
			<BrowserRouter>
				<div>
					<Nav />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/recipes" component={RecipePage} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
};