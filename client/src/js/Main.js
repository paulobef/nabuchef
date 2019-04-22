import React from 'react';
// import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';
import RecipesView from './RecipesView'


class Main extends React.Component {
    render() {
        return (
        <div id="main" className="main">
            <Header openNav={this.props.openNav}/>
            <RecipesView />
        </div>)
    }
}

export default Main;