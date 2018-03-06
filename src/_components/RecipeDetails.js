import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

class RecipeDetails extends React.Component {
	render() {
		const recipeId = this.props.match.params.id;
		console.log('current recipe', this.props.recipes[recipeId]);

		const currentRecipe = this.props.recipes[recipeId];

		return (
			<section className="main-content">
				<Header />
				<h1>{recipeId}. {currentRecipe.name}</h1>
				<div className="recipe-info">
					<ul><strong>Ingredients</strong>
						{
							currentRecipe.ingredients.map((item, i) => {
								return (
									<li key={i}>{item}</li>
								);
							})
						}
					</ul>
					<ol><strong>Directions</strong>
						{
							currentRecipe.directions.map((item, i) => {
								return (
									<li key={i}>{item}</li>
								);
							})
						}
					</ol>
				</div>		
			</section>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(RecipeDetails);