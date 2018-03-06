import React from 'react';
// router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import RecipePage from './RecipePage';
import RecipeDetails from './RecipeDetails';

export default class App extends React.Component {	
	render() {
		return (
			<BrowserRouter>
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/recipes" component={RecipePage} />
						<Route path="/recipes/:id" component={RecipeDetails} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
};