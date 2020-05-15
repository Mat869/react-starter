import React from 'react';
import './Menu.css';

class Menu extends React.Component {
	render() {
		return (<nav className="Menu">
			<ul>
				{this.props.children}
			</ul>
		</nav>);
	}
}

export default Menu;
