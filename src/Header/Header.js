import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar.js'

class Header extends Component {
	render() {
		return(
			<div className="Header">
				<Navbar />
				<div className="text-center">
					<img src="https://uxgradients.github.io/abc/assets/img/favicon.png" alt="Site Logo" width="70px"/>
					<div className="header_title">uxGradients</div>
					<div className="header_text">
						Do you often look for cool background gradients for your project?
						<br/><br/>
						Uxgradients is a free collection of 400+ linear gradients that you can use <br/> as
						content backdrops in any part of your website. Easy copy CSS3 crossbrowser code
						<br/> and use it in a moment!
					</div>
				</div>
			</div>
		)
	}
}

export default Header;