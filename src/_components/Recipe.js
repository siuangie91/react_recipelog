import React from 'react';

class Recipe extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, description, ingredients, directions } = this.props.recipe;

		return (
			<div className="recipe-preview">
				<h2>Your New Recipe!</h2>
				<div className="recipe-image col-md-4">
					<img src="http://placehold.it/100x100"/>
				</div>
				<div className="recipe-info col-md-6">
					<h4>{name}</h4>
					<p>{description}</p>
					<ul><strong>Ingredients</strong>
						{
							ingredients.map((item, i) => {
								return (
									<li key={i}>{item}</li>
								);
							})
						}
					</ul>
					<ol><strong>Directions</strong>
						{
							directions.map((item, i) => {
								return (
									<li key={i}>{item}</li>
								);
							})
						}
					</ol>
				</div>
			</div>
		);
	}
}

export default Recipe;