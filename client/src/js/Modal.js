import React from 'react';
import '../css/App.css';
import '../css/Modal.css';


class Modal extends React.Component {


    render() {
      let visible = "";
      if (this.props.show) {
        visible = 'visible'
      }
       
        return (
      <div className={"modal " + visible}>
          <div className="modal-content">
              <span onClick={this.props.hide} className="close">&times;</span>
              <p>Some text in the Modal..</p>
          </div>
      </div>
      )
            
        }
    }


    

export default Modal;
