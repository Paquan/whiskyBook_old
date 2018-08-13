import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class AddNew extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        addWhiskyModal: false,
      };
  
      this.toggleAddWhiskyModal = this.toggleAddWhiskyModal.bind(this);
    }
  
    toggleAddWhiskyModal() {
      this.setState({
        addWhiskyModal: !this.state.addWhiskyModal,
      });
    }
  
    render() {
      return (
        <React.Fragment>
          <Button className="btn-primary" onClick={this.toggleAddWhiskyModal}>Add Whisky</Button>
          <Modal
            isOpen={this.state.addWhiskyModal}
            toggle={this.toggleAddWhiskyModal}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggleAddWhiskyModal}>
              Modal title
            </ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleAddWhiskyModal}>
                Do Something
              </Button>
              <Button color="secondary" onClick={this.toggleAddWhiskyModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </React.Fragment>
      );
    }
  }