import React from 'react';
import { connect } from 'react-redux';

import { setRecipe } from '../_actions';

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import Recipe from './Recipe';

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			recipe: {
				name: '',
				description: '',
				ingredients: [],
				directions: []
			},
			showPreview: false
		}
	}

	updateRecipeStr(value, recipePart) {
		let recipe = this.state.recipe;
		recipe[recipePart] = value;
		this.setState({
			recipe: recipe
		})
	}

	updateRecipeArr(string, recipePart) {
		let arr = string.split('\n');
		let recipe = this.state.recipe;
		recipe[recipePart] = arr;
		this.setState({
			recipe: recipe
		})
	}

	addToRecipeRegister() {
		this.props.setRecipe(this.state.recipe);
		this.setState({
			showPreview: true
		})
	}

	render() {
		return (
			<section>
				<h1>React Recipe Register</h1>
				<div className="col-md-5 form-container">
					<h2>Enter your recipe info:</h2>

					<Form>
						<FormGroup>
							<ControlLabel>Recipe Name</ControlLabel>
							<FormControl type="text" placeholder="World Famous Chicken" 
								onChange={e => this.updateRecipeStr(e.target.value, 'name')}/>
						</FormGroup>	
						<FormGroup>
							<ControlLabel>Description</ControlLabel>
							<FormControl type="text" placeholder="Double fried, extra cripsy chicken"
								onChange={e => this.updateRecipeStr(e.target.value, 'description')}/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Ingredients</ControlLabel>
							<FormControl componentClass="textarea" rows="7" placeholder="Hit Enter after each ingredient" 
								onChange={e => this.updateRecipeArr(e.target.value, 'ingredients')}/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Directions</ControlLabel>
							<FormControl componentClass="textarea" rows="7" placeholder="Hit Enter after each step" 
								onChange={e => this.updateRecipeArr(e.target.value, 'directions')}/>
						</FormGroup>
						<FormGroup>
							<Button className="btn btn-primary"
								onClick={() => {
									this.addToRecipeRegister()
								}}>+ Add to Recipe Register</Button>
						</FormGroup>
					</Form>
				</div>
				<div className="col-md-5 home-preview">
					{
						this.state.showPreview ? 
							<Recipe recipe={this.state.recipe} /> : 
							''
					}
				</div>
			</section>
		);
	}
}


export default connect(null, { setRecipe })(Home);