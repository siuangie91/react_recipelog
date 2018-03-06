import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<header>
		        <h1>React Recipe Register</h1>
		        <p><i className="fa fa-exclamation"></i>&nbsp;<em>This is a front-end-only project.&nbsp;<i className="fa fa-exclamation"></i></em></p>
		        <p>UX for this project provided by Katherine Torres: <a href="http://www.google.com" target="_blank">http://www.google.com <i className="fa fa-external-link"></i></a></p>
		    </header>	
		);
	}
}