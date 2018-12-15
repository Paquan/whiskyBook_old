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
      addWhiskyModal: false,
      activeTab: 1,
      whiskies: [],
      options: {}
    };

    this.toggleAddWhiskyModal = this.toggleAddWhiskyModal.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  loadData() {
    this.setState({ whiskies, options: tastingOptions });
  }

  selectTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
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
    let distilleries = [];
    if (!newValue) {
      distilleries = this.state.options.distilleries.filter(distillery => {
        return !distillery.__isNew__;
      });
    } else if (newValue.__isNew__) {
      distilleries = [...this.state.options.distilleries, newValue];
    }
    console.log(distilleries);
    
    this.setState({
      ...this.state,
      options: {
        ...this.state.options,
        distilleries: distilleries
      }
    });
  };

  render() {
    return (
      <Page>
        <Button color="primary" onClick={this.toggleAddWhiskyModal}>
          Add Whisky
        </Button>
        <AddWhiskyModal
          isOpen={this.state.addWhiskyModal}
          toggle={this.toggleAddWhiskyModal}
          activeTab={this.state.activeTab}
          options={this.state.options}
          selectTab={this.selectTab}
          handleChange={this.handleChange}
        />
        {this.state.whiskies.length && (
          <TastingsTable whiskies={this.state.whiskies} />
        )}
      </Page>
    );
  }
}
