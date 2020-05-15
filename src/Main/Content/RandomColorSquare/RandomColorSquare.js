import React from 'react';
import './RandomColorSquare.css';

class RandomColorSquare extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }

    handleClick() {

        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);

        let bgColor = "rgb(" + x + "," + y + "," + z + ")";

        this.setState({
            color: bgColor
        });
    }

	render() {
        return (<div 
            className="RandomColorSquare"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick.bind(this)}
        >
        </div>);
	}
}

export default RandomColorSquare;
