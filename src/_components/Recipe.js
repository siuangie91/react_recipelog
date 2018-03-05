import React from 'react';

class Recipe extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, description, ingredients, directions } = this.props.recipe;

		return (
			<div>
				<h4>{name}</h4>
				<p>{description}</p>
				<ul>Ingredients
					{
						ingredients.map((item, i) => {
							return (
								<li key={i}>{item}</li>
							);
						})
					}
				</ul>
				<ol>Directions
					{
						directions.map((item, i) => {
							return (
								<li key={i}>{item}</li>
							);
						})
					}
				</ol>
			</div>
		);
	}
}

export default Recipe;