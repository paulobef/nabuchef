import React from 'react';
// import logo from '../logo.svg';
import '../css/App.css';
import Card from './Card';
import ModalController from './ModalController'


class RecipesView extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
            recipesData: {}
        }
      }

    componentDidMount() {
        const url = 'http://localhost:3001/api/recipes'
        const fetchData = { 
            method: 'GET', 
            headers: new Headers(),
        }

        fetch(url, fetchData)
        .then(response => response.json())
        .then(data => this.setState({ recipesData: data }))
        .catch(err => {
        // Do something for an error here
        console.log(err)
        })
    }

    render() {

        let cards = [];
        for (let i = 0; i < this.state.recipesData.count; i++) {
            cards.push(<Card key={i.toString()}recipeInfo={this.state.recipesData.recipes[i]} />);
            console.log(this.state.recipesData.recipes[i]);
            
        }   

        return (

            <ul className="cards"> 
                {cards}
                <li className="card"><ModalController /></li>
            </ul>
        )
    }
}

export default RecipesView;