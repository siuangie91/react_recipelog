import React from 'react';
import { connect } from 'react-redux';

import Recipe from './Recipe';
import Header from './Header';

class RecipePage extends React.Component {
	render() {
		console.log('recipes', this.props.recipes)
		return (	
			<section className="main-content">
				<Header />
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
			</section>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(RecipePage);