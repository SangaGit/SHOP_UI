import React from 'react';
import { ReactNode } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TopNavBar from '../top-nav-bar/TopNavBar';

export class Header extends React.Component {
	render(): ReactNode {
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/products'>
						ACME Mobile
					</Link>
					<TopNavBar />
				</div>
			</nav>
		);
	}
}
