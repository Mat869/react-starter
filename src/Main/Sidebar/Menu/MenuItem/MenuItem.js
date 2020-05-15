import React from 'react';
import './MenuItem.css';

class MenuItem extends React.Component {
	render() {
		return (<li className="MenuItem">
			{this.props.children}
		</li>);
	}
}

export default MenuItem;