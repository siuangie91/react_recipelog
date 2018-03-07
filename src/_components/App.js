import React from 'react';
// router
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import RecipePage from './RecipePage';
import RecipeDetails from './RecipeDetails';
import NotFound from './NotFound';

export default class App extends React.Component {
	render() {
		return (
			<HashRouter basename="/reactreciperegister">
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/recipes" component={RecipePage} />
						<Route exact path="/recipe/:id" component={RecipeDetails} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
};