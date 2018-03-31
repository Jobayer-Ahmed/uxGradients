import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar.js'

class Header extends Component {
	render() {
		const ref = this;
		return(
			<div className="Header">
				<Navbar update={ref.props.header}/>
				<div className="text-center">
					<img src="https://uxgradients.github.io/abc/assets/img/favicon.png" alt="Site Logo" width="70px"/>
					<div className="header_title">uxGradients</div>
					<div className="header_text">
						Do you often look for cool background gradients for your project?
						<br/><br/>
						Uxgradients is a free collection of 400+ linear gradients that you can use <br/> as
						content backdrops in any part of your website. Easy copy CSS3 crossbrowser code
						<br/> and use it in a moment! <br/> <br/> <br/>
						<b>Wanna add your custom gradients?</b> <br/>
						<button title="Add Color" className="add" onClick={ref.props.update}><i className= { ref.props.icon ? "ion-android-cancel" : "ion-android-add-circle" }></i></button>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;