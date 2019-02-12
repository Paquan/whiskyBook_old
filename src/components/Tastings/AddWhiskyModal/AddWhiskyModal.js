import React from 'react';
import classnames from 'classnames';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  PaginationLink,
  PaginationItem,
  Pagination
} from 'reactstrap';
import { HeritageTab } from './HeritageTab';
import { DistilleryTab } from './DistilleryTab';
import { KindTap } from './KindTab';

export class AddWhiskyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      distillery: null,
      country: 'SCT',
      region: null,
      kind: 'SM',
      chillFiltered: false,
      colored: false,
      caskStrength: false,
      singleCask: false
    };
  }

  handleDistilleryChange = distillery => {
    if (!distillery || !distillery.__isNew__) {
      this.props.resetDistilleries();
    } else if (distillery.__isNew__) {
      this.props.addNewDistillery(distillery);
    }
    this.setState({
      distillery
    });
  };

  handleKindChange = event => {
    this.setState(
      {
        kind: event.target.value
      },
      () => {
        if (this.state.kind === 'BO' && this.state.country === 'USA') {
          this.handleColoredChange(false);
        }
      }
    );
  };

  handleChillFilteredChange = chillFiltered => {
    this.setState({
      chillFiltered
    });
  };

  handleColoredChange = colored => {
    this.setState({
      colored
    });
  };

  handleSingleCaskChange = singleCask => {
    this.setState({
      singleCask
    });
  };

  handleCaskStrengthChange = caskStrength => {
    this.setState({
      caskStrength
    });
  };

  handelCountryChange = event => {
    this.setState({
      country: event.target.value
    });
  };

  selectTab = tab => {
    this.setState({
      activeTab: Number(tab)
    });
  };

  selectNextTab = () => {
    // TODO: Handle when tab gets out of bounce
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
              tabId={1}
              heritage={this.props.options.heritage}
              countryChange={this.handelCountryChange}
              selectedCountry={this.state.country}
            />
            <DistilleryTab
              tabId={2}
              distilleries={this.props.options.distilleries}
              distilleryChange={this.handleDistilleryChange}
            />
            <KindTap
              tabId={3}
              kinds={this.props.options.kinds}
              selectedKind={this.state.kind}
              kindChange={this.handleKindChange}
              chillFiltered={this.state.chillFiltered}
              chillFilteredChange={this.handleChillFilteredChange}
              colored={this.state.colored}
              coloredChange={this.handleColoredChange}
              singleCask={this.state.singleCask}
              singleCaskChange={this.handleSingleCaskChange}
              caskStrength={this.state.caskStrength}
              caskStrengthChange={this.handleCaskStrengthChange}
            />
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
