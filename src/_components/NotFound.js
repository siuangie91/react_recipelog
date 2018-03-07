import React from 'react';

import { Link } from 'react-router-dom';

import Header from './Header';

class NotFound extends React.Component {
	render() {
		return (
			<section className="main-content">
				<Header />
				<div className="col-md-6 offset-md-3 recipe-info">
					<h2>Sorry! No such page!</h2>
					<Link to="/">Let's add a recipe!</Link>
				</div>
			</section>
		);
	}
}

export default NotFound;