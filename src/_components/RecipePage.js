import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Recipe from './Recipe';
import Header from './Header';

class RecipePage extends React.Component {
	render() {
		console.log('recipes', this.props.recipes)
		return (	
			<section className="main-content">
				<Header />
				{
					(this.props.recipes.length < 1) ?
						<section className="col-md-6 offset-md-3">
							<h2>Uh oh! You don't have any recipes yet!</h2>
							<Link to="/">Let's add a recipe!</Link>
						</section>
						:
						<section className="col-md-6 offset-md-3">
							<h2>Your Recipes</h2>
							{
								this.props.recipes.map((recipe) => {
									return (
										<Recipe key={recipe.id} recipe={recipe}/>
									);
								})
							}
						</section>
				}				
			</section>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(RecipePage);