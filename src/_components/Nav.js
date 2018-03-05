import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
	render() {
		return (
			<section>
				<nav>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/recipes">Recipes</NavLink> 
				</nav>
			</section>
		);
	}
}

export default Nav;