import React from 'react';
import '../css/App.css';
import Modal from './Modal'

class ModalController extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <button onClick={this.handleShow}>Ajoutez une recette</button>
        <Modal show={this.state.show} hide={this.handleClose} />
      </>
    );
  }
}

export default ModalController;