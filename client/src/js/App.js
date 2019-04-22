import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../css/App.css';
import Nav from './Nav'
import Main from './Main';
import Modal from './Modal'
// import food from '../images/food.jpg'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        isNavOpen: false
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);

  }

  openNav() {
    this.setState({
      isNavOpen: true
  });
  }

  closeNav() {
    this.setState({
      isNavOpen: false
    });
    
}


  render() {
    return (
      <div className="App">
        
        
        <div className="container-fluid row m-0 p-0">
          
          <Nav closeNav={this.closeNav} openNav={this.openNav} isOpen={this.state.isNavOpen} />
          <Main openNav={this.openNav}/>
          
        </div>
      </div>
        
    );
  }
}

export default App;
