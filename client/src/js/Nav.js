import React from 'react';
// import logo from '../logo.svg';
import '../css/Nav.css';
import apple from '../images/foody/apple.svg';
// import asparagus from '../images/foody/asparagus.svg';
import avocado from '../images/foody/avocado.svg';
import banana from '../images/foody/banana.svg';
import bean from '../images/foody/apple.svg';
// import biscuit from '../images/foody/biscuit.svg';
import carrot from '../images/foody/carrot.svg';
import bread from '../images/foody/bread.svg';
// import beer from '../images/foody/beer.svg';
import egg from '../images/foody/egg.svg';
import mushroom from '../images/foody/mushroom.svg';
import pizza from '../images/foody/pizza.svg';
import kiwi from '../images/foody/kiwi.svg';
import lemon from '../images/foody/lemon.svg';
// import shrimp from '../images/foody/shrimp.svg';
import tomato from '../images/foody/tomato.svg';
import watermelon from '../images/foody/watermelon.svg';
import popcorn from '../images/foody/popcorn.svg';
// import App from './App';


const fruitList = [apple, avocado, banana, bean, carrot, bread, egg, mushroom, pizza, kiwi, lemon, watermelon, tomato, popcorn];

class Nav extends React.Component {


    render() {
        console.log('component rendered')
        
        let navClassList = "";

        if (this.props.isOpen) {
            navClassList = "openNav";
        } else {
            navClassList = "closeNav";
            console.log('composent closed')
        }

        const randomNum = Math.floor(Math.random() * fruitList.length)
        
        return (
        <div>
            <nav id="sidebar" className={'sidebar ' + navClassList}>
                <div className="logo-container">
                <img src={fruitList[randomNum]} className="App-logo" alt="logo" />
                </div>
                <a href="#" className="closebtn" onClick={this.props.closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </nav>
            
          </div>
        )
    }
}

export default Nav;