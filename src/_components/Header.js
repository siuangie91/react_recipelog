import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<header>
		        <h1>React Recipe Register</h1>
		        <p><i className="fa fa-exclamation"></i>&nbsp;<em>This is a front-end-only project.&nbsp;<i className="fa fa-exclamation"></i></em></p>
                <p style={{color:'#ff0000', fontWeight: 'bold'}}><i className="fa fa-exclamation"></i>&nbsp;<em>Work In Progress version!&nbsp;<i className="fa fa-exclamation"></i></em></p>
		        <p>UX for this project provided by <a href="https://www.linkedin.com/in/torreskatherine/" target="_blank">Katherine Torres <i className="fa fa-external-link"></i></a></p>
		    </header>
		);
	}
}