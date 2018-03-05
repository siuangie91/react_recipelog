import React from 'react';
import { connect } from 'react-redux';

import Recipe from './Recipe';

class RecipePage extends React.Component {
	render() {
		console.log('recipes', this.props.recipes)
		return (	
			<section className="col-md-6">
				<h1>Your Recipes!</h1>
				{
					this.props.recipes.map((recipe, i) => {
						return (
							<Recipe key={i} recipe={recipe}/>
						);
					})
				}
			</section>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(RecipePage);