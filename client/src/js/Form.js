import React from 'react';
import '../css/App.css';
import '../css/Form.css';

class NewRecipeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          requestBody: {
              name: '',
              instructions: '',
              persons: 4
          }
        };
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeInstructions = this.handleChangeInstructions.bind(this);
      this.handleChangePersons = this.handleChangePersons.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({requestBody: { name: event.target.value }});
    }
    handleChangeInstructions(event) {
        this.setState({requestBody: { instructions: event.target.value }});
      }
    handleChangePersons(event) {
        this.setState({requestBody: { persons: event.target.value }});
      }
  
    handleSubmit(event) {
        const url = 'http://localhost:3001/api/recipes'
        const fetchData = { 
            method: 'POST', 
            headers: new Headers(),
            body: JSON.stringify(this.state.requestBody)
        }

        fetch(url, fetchData)
        .then(response => response.json())
        .then(data => this.setState(console.log(data) ))
        .catch(err => {
        // Do something for an error here
        console.log(err)
        })
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label for="name">Name</label>
            <input name="name" type="text" value={this.state.requestBody.name} onChange={this.handleChangeName} />
          
          <label for="instructions">instructions </label>
            <input name="instructions" type="text" value={this.state.requestBody.instructions} onChange={this.handleChangeInstructions} />
         
          <label for="persons" >Number of persons</label>
            <input name="persons" type="number" value={this.state.requestBody.persons} onChange={this.handleChangePersons} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NewRecipeForm