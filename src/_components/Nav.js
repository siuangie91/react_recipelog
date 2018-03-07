import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
	render() {
		return (
			<section className="nav-container">
				<h1>React Recipe Register</h1>
				<nav>
					<NavLink exact to="/" activeClassName="active">
						<span><i className="fa fa-home"></i> Home</span>
					</NavLink>
					{' '}
					<NavLink to="/recipes" activeClassName="active">
						<span><i className="fa fa-book"></i> Recipes</span>
					</NavLink>
				</nav>
			</section>
		);
	}
}

export default Nav;