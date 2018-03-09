import React from 'react';
import { connect } from 'react-redux';

import { setRecipe } from '../_actions';

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import Header from './Header';
import Recipe from './Recipe';

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			recipe: {
				id: '',
				name: '',
				image: '',
				description: [],
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
		let arr = string.split('\n')
					.map(item => item.trim()) // trim out the lines that are just spaces
					.filter(item => item.length > 0); // filter out any items that may have been created by pressing Enter by accident

		let recipe = this.state.recipe;
		recipe[recipePart] = arr;
		this.setState({
			recipe: recipe
		})
	}

	addToRecipeRegister() {
		// pass it into the store
		this.props.setRecipe(this.state.recipe);

		this.setState({
			showPreview: true
		});
		//set up state for next recipe
		this.setState({
			recipe: {
				id: '',
				image: '',
				name: '',
				description: [],
				ingredients: [],
				directions: []
			}
		});
		// reset form
		document.querySelectorAll('.form-control').forEach((currentItem) => {
			currentItem.value = "";
			currentItem.innerHTML = "";
		});

		window.scrollTo(0,0);
	}

	previewImage(e) {
		e.preventDefault();

		let reader = new FileReader();
		let theFile = e.target.files[0];

		console.log('theFile', theFile);
		console.log('reader', reader);

		reader.onloadend = (theFile, image) => {
			console.log('reader.result', reader.result);

			this.updateRecipeStr(reader.result, 'image');
		}

		reader.readAsDataURL(theFile);
	}

	render() {
		// console.log('this.props.recipes', this.props.recipes);
		const recipeStore = this.props.recipes;

		return (
			<section className="main-content">
				<Header />
				<section className="row">
					{
						this.state.showPreview ?
							<div className="col-md-6 offset-md-3 home-preview">
								<h2>Your new recipe:</h2>
								<Recipe recipe={recipeStore[recipeStore.length - 1]}/>
							</div> :
							''
					}
					<div className="col-md-6 offset-md-3 form-container">
						<h2>Enter your recipe info:</h2>

						<Form>
							<FormGroup>
								<div className="image-preview">
									<img src={this.state.recipe.image} height="200"/>
								</div>
								<ControlLabel>Photo</ControlLabel>
								<FormControl type="file"
									onChange={e => this.previewImage(e)}/>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Recipe Name</ControlLabel>
								<FormControl type="text" placeholder="World Famous Chicken"
									onChange={e => this.updateRecipeStr(e.target.value, 'name')}/>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Description</ControlLabel>
								<FormControl componentClass="textarea" rows="3" placeholder="Hit Enter to create a new paragraph"
									onChange={e => this.updateRecipeArr(e.target.value, 'description')}/>
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
							<FormGroup className="submit">
								<Button className="btn btn-primary"
									onClick={() => {
										this.updateRecipeStr(recipeStore.length+1, 'id');
										this.addToRecipeRegister();
									}}>
										<strong>+ Add to Recipe Register</strong>
								</Button>
							</FormGroup>
						</Form>
					</div>
				</section>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return state;
}


export default connect(mapStateToProps, { setRecipe })(Home);