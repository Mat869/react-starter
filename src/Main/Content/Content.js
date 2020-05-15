import React from 'react';
import './Content.css';
import Collapsible from './Collapsible/Collapsible';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare'

class Content extends React.Component {



	render() {
		return (<div className="Content">
			<Collapsible header="This is the header">
				This is the content1
			</Collapsible>
			<Collapsible header="This is the header2">
				This is the content2
			</Collapsible>
			<RandomColorSquare />
		</div>);
	}
}

export default Content;
