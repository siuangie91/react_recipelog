import React from 'react';

class Recipe extends React.Component {
	render() {
		const { id, name, description, ingredients, directions } = this.props.recipe;

		return (
			<div className="recipe-preview">
				{/*<h2>Your New Recipe!</h2>*/}
				<div className="recipe-header">
					<div className="recipe-image">
						<img src={`http://placehold.it/100x100?text=${name}`} alt={name}/>
					</div>
					<div className="recipe-title">
						<h4>{id+1}. {name}</h4>
						<p>{description}</p>
					</div>
				</div>
				<div className="recipe-info">
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