import React from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			description: '',
			ingredients: [],
			directions: ''
		}
	}

	updateIngredientList(ingredientsStr) {
		let ingredientsArr = ingredientsStr.split('\n');
		console.log(ingredientsArr);
		this.setState({
			ingredients: ingredientsArr
		})
	}

	render() {
		console.log(this.state.ingredients);

		return (
			<div>
				<h2>Enter your recipe info:</h2>

				<Form>
					<FormGroup>
						<ControlLabel>Recipe Name</ControlLabel>
						<FormControl type="text" placeholder="World Famous Chicken" 
							onChange={e => this.setState({
								name: e.target.value
							})}/>
					</FormGroup>	
					<FormGroup>
						<ControlLabel>Description</ControlLabel>
						<FormControl type="text" placeholder="Double fried, extra cripsy chicken" 
							onChange={e => this.setState({
								description: e.target.value
							})}/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Ingredients</ControlLabel>
						<FormControl componentClass="textarea" rows="7" placeholder="Go to the next line after each ingredient" 
							onChange={e => this.updateIngredientList(e.target.value)}/>
					</FormGroup>
				</Form>

				<h4>{this.state.name}</h4>
				<p>{this.state.description}</p>
				<ul>
					{

						this.state.ingredients.map((item, i) => {
							return (
								<li key={i}>{item}</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state.rootReducer;
}

export default connect(mapStateToProps, null)(Home);