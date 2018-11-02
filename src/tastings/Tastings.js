import React from 'react';
import { Page } from '../shared/Page';
import { Button } from 'reactstrap';
import { TastingsTable } from './TastingTable';
import { tastingOptions } from '../shared/config/tastingOptions';
import { whiskies } from '../shared/config/whiskys';
import { AddNewWhiskyModal } from './AddNewWhiskyModal';

export class Tastings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addWhiskyModal: false,
      activePage: '1',
      whiskies: [],
      options: {}
    };

    this.toggleAddWhiskyModal = this.toggleAddWhiskyModal.bind(this);
  }

  loadData() {
    this.setState({ whiskies, options: tastingOptions });
  }

  selectPage(page) {
    if (this.state.activePage !== page) {
      this.setState({
        activePage: page
      });
    }
  }

  componentDidMount() {
    this.loadData();
  }

  toggleAddWhiskyModal() {
    this.setState({
      addWhiskyModal: !this.state.addWhiskyModal
    });
  }

  handleChange = newValue => {
    if (newValue.__isNew__) {
      this.setState({
        ...this.state,
        options: {
          ...this.state.options,
          distilleries: [...this.state.options.distilleries, newValue.label]
        }
      });
    }
    console.log(newValue);
  };

  render() {
    return (
      <Page>
        <Button color="primary" onClick={this.toggleAddWhiskyModal}>
          Add Whisky
        </Button>
        <AddNewWhiskyModal
          isOpen={this.state.addWhiskyModal}
          toggle={this.toggleAddWhiskyModal}
          selectPage={this.selectPage}
        />
        {this.state.whiskies.length && (
          <TastingsTable whiskies={this.state.whiskies} />
        )}
      </Page>
    );
  }
}
