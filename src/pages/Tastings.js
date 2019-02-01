import React from 'react';
import { Button } from 'reactstrap';
import { PageContainer } from '../container/PageContainer';
import { TastingsTable } from '../components/Tastings/TastingTable';
import { AddWhiskyModal } from '../components/Tastings/AddWhiskyModal/AddWhiskyModal';
import { tastingOptions } from '../config/tastingOptions';
import { whiskies } from '../config/whiskys';

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
      <PageContainer>
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
      </PageContainer>
    );
  }
}
