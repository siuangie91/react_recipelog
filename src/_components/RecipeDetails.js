import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Header from './Header';

class RecipeDetails extends React.Component {
	render() {
		const recipeId = this.props.match.params.id;

		console.log('current recipe', this.props.recipes[recipeId - 1]); // subtract one because IDs were not zero-indexed
		const currentRecipe = this.props.recipes[recipeId - 1]; // subtract one because IDs were not zero-indexed

		return (
			<section className="main-content">
				<Header />
				{
					(!currentRecipe) ? 
						<div className="col-md-6 offset-md-3 recipe-info">
							<h2>Sorry! No such recipe!</h2>
							<Link to="/">Go and add one!</Link>
						</div>
						:
						<div className="col-md-6 offset-md-3 recipe-info">
							<img src={`http://placehold.it/300x300?text=${currentRecipe.name}`} alt={currentRecipe.name}/>
							<h2>{currentRecipe.name}</h2>
							<div className="recipe-description">
								{
									currentRecipe.description.map((desc, i) => {
										return (
											<p key={i}>{desc}</p>
										);
									})
								}
							</div>
							<h4>Ingredients</h4>
							<ul className="ingredients-list">
								{
									currentRecipe.ingredients.map((ingr, i) => {
										return (
											<li key={i}>{ingr}</li>
										);
									})
								}
							</ul>
							<h4>Directions</h4>
							<ol className="directions-list">
								{
									currentRecipe.directions.map((dir, i) => {
										return (
											<li key={i}>{dir}</li>
										);
									})
								}
							</ol>
						</div>
				}
			</section>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(RecipeDetails);