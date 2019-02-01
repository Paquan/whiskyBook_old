import React from 'react';
import { Page } from '../shared/Page';
import { Button } from 'reactstrap';
import { TastingsTable } from './TastingTable';
import { tastingOptions } from '../shared/config/tastingOptions';
import { whiskies } from '../shared/config/whiskys';
import { AddWhiskyModal } from './AddWhiskyModal/AddWhiskyModal';

export class Tastings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      whiskies: [],
      options: {}
    };
  }

  loadData() {
    this.setState({ whiskies, options: tastingOptions });
  }

  componentDidMount() {
    this.loadData();
  }

  handleModalToggle = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  };

  handleNewDistillery = newDistillery => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        distilleries: [...prevState.options.distilleries, newDistillery]
      }
    }));
  };

  handleResetDistilleries = () => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        distilleries: prevState.options.distilleries.filter(distillery => {
          return !distillery.__isNew__;
        })
      }
    }));
  };

  render() {
    return (
      <Page>
        <Button color="primary" onClick={this.handleModalToggle}>
          Whisky hinzufügen
        </Button>
        <AddWhiskyModal
          isOpen={this.state.modalIsOpen}
          toggleModal={this.handleModalToggle}
          options={this.state.options}
          addNewDistillery={this.handleNewDistillery}
          resetDistilleries={this.handleResetDistilleries}
        />
        {this.state.whiskies.length && (
          <TastingsTable whiskies={this.state.whiskies} />
        )}
      </Page>
    );
  }
}
