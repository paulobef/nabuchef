import React from 'react';
// import logo from '../logo.svg';
import '../css/App.css';
import '../css/Card.css';
import food from '../images/food.jpg'


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.recipeInfo.name,
            description: this.props.recipeInfo.instructions
        };
      }

    render() {
        return (
            <li className="card">
                <img src={food} alt="Risotto aux cèpe" />
                <h1>{this.state.name}</h1>
                <p><button>Voir plus</button></p>
            </li>
            )
    }
}

export default Card;