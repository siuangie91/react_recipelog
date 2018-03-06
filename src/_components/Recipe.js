import React from 'react';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
	render() {
		const { id, name, description } = this.props.recipe;

		return (
			<Link to={`/recipe/${id}`} 
				className="recipe-preview">
				<div className="recipe-header">
					<div className="recipe-image">
						<img src={`http://placehold.it/100x100?text=${name}`} alt={name}/>
					</div>
					<div className="recipe-title">
						<h4>{id+1}. {name}</h4>
						<p>{description}</p>
					</div>
				</div>
			</Link>
		);
	}
}

export default Recipe;