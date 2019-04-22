import React from 'react';
// import logo from '../logo.svg';
import '../css/App.css';
import '../css/Header.css'


class Header extends React.Component {
    render() {
        return (
            <header className="App-header navbar">
                <button className="openbtn" onClick={this.props.openNav}>&#9776;</button>
                <input type="text" className="search" name="search" placeholder="Tarte aux framboises..."/>
            </header>
            )
    }
}

export default Header;