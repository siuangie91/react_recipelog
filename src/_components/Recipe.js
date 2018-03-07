import React from 'react';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
	render() {
		const { id, name, description } = this.props.recipe;
		
		const descBlurb = (description[0].length > 100) ? 
			`${description[0].substr(0, 100)}...` : description[0].substr(0, 100);

		return (
			<div className="recipe-preview">
				<div className="recipe-header">
					<div className="recipe-image">
						<img src={`http://placehold.it/100x100?text=${name}`} alt={name}/>
					</div>
					<div className="recipe-title">
						<h4>{id}. {name}</h4>
						<p>{descBlurb}</p>
					</div>
				</div>
				<Link to={`/recipe/${id}`} className="recipe-link" />
			</div>
		);
	}
}

export default Recipe;