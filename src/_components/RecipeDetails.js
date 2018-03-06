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
				<div className="col-md-6 offset-md-3 recipe-info">
					<img src={`http://placehold.it/300x300?text=${currentRecipe.name}`} alt={currentRecipe.name}/>
					<h2>{+recipeId+1}. {currentRecipe.name}</h2>
					<p>{currentRecipe.description}</p>
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