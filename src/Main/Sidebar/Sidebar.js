import React from 'react';
import './Sidebar.css';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';

class Sidebar extends React.Component {
	render() {
		return (<div className="Sidebar">
			<Menu>
				<MenuItem>
					<a href="#">One</a>
				</MenuItem>
				<MenuItem>
					<a href="#">Two</a>
				</MenuItem>
				<MenuItem>
					<a href="#">Three</a>
				</MenuItem>
			</Menu>
		</div>);
	}
}

export default Sidebar;
