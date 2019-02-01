import React from 'react';
import classnames from 'classnames';
import { HeritageTab } from './HeritageTab';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  PaginationLink,
  PaginationItem,
  Pagination,
  TabPane
} from 'reactstrap';
import { DistilleryTab } from './DistilleryTab';

export class AddWhiskyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      newWhisky: {
        distillery: null,
        heritage: {
          country: 'SCT',
          region: null
        }
      }
    };
  }

  handleDistilleryChange = distillery => {
    if (!distillery || !distillery.__isNew__) {
      this.props.resetDistilleries();
    } else if (distillery.__isNew__) {
      this.props.addNewDistillery(distillery);
    }
    this.setState({
      newWhisky: {
        distillery
      }
    });
  };

  handelCountryChange = event => {
    this.setState({
      newWhisky: {
        heritage: {
          country: event.target.value
        }
      }
    });
    debugger
  };

  selectTab = tab => {
    this.setState({
      activeTab: tab
    });
  };

  selectNextTab = () => {
    // TODO: Handle Tab out of Bounce

    this.setState(prevState => ({
      activeTab: prevState.activeTab + 1
    }));
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModal}>
        <ModalHeader toggle={this.props.toggleModal}>
          Neuen Whisky hinzufügen
        </ModalHeader>
        <ModalBody>
          <Pagination>
            <PaginationItem>
              <PaginationLink
                className={classnames({
                  active: this.state.activeTab === 1
                })}
                onClick={() => {
                  this.selectTab(1);
                }}
              >
                Herkunft
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={classnames({
                  active: this.state.activeTab === 2
                })}
                onClick={() => {
                  this.selectTab(2);
                }}
              >
                Name
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={classnames({
                  active: this.state.activeTab === 3
                })}
                onClick={() => {
                  this.selectTab(3);
                }}
              >
                Art
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <TabContent activeTab={this.state.activeTab.toString()}>
            <HeritageTab
              tabId={'1'}
              heritage={this.props.options.heritage}
              countryChange={this.handelCountryChange}
              selectedCountry={this.state.newWhisky.heritage.country}
            />
            <DistilleryTab
              tabId={'2'}
              distilleries={this.props.options.distilleries}
              distilleryChange={this.handleDistilleryChange}
            />
            <TabPane tabId="3">...</TabPane>
          </TabContent>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggleModal}>
            Abbrechen
          </Button>
          <Button color="primary" onClick={this.selectNextTab}>
            Weiter
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
