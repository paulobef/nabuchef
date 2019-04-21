import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import food from './images/food.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="search" name="search" placeholder="Search..." class="search"></input>
        </header>
        <div className="container main">
          <div class="row">
           <div class="col-sm">
            <div class="card">
              <img src={food} class="card-img-top" alt="  "/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
            <div class="col-sm">
            <div class="card">
              <img src={food} class="card-img-top" alt=" "/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
            <div class="col-sm">
            <div class="card">
              <img src={food} class="card-img-top" alt="  "/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div> 
            </div> 
          </div>
        </div>
      </div>
        
    );
  }
}

export default App;
