import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return(
			<div className="Navbar">
				<div className="nav_wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
								<a href="" className="sitename">Uxgradients</a>
							</div>
							<div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
								<div className="link text-right">
									<a href="https://fb.com/mickeyvaai" className="fb">Facebook</a>
									<a href="https://github.com/Uxgradients" className="git">Github</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar;