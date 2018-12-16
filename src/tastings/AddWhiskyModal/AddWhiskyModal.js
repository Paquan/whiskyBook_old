import React from 'react';
import classnames from 'classnames';
import CreatableSelect from 'react-select/lib/Creatable';
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

export class AddWhiskyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {}
    };

    this.handleDistilleryChange = this.handleDistilleryChange.bind(this);
  }

  componentDidMount() {
    // TODO: props are empty at this point. Find a way to manipulate options of parant
    this.setState({
      options: this.props.options
    });
  }

  handleDistilleryChange = newValue => {
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
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Pagination>
            <PaginationItem>
              <PaginationLink
                className={classnames({
                  active: this.props.activeTab === 1
                })}
                onClick={() => {
                  this.props.selectTab(1);
                }}
              >
                Heritage
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={classnames({
                  active: this.props.activeTab === 2
                })}
                onClick={() => {
                  this.props.selectTab(2);
                }}
              >
                Name
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={classnames({
                  active: this.props.activeTab === 3
                })}
                onClick={() => {
                  this.props.selectTab(3);
                }}
              >
                Kind
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <TabContent activeTab={this.props.activeTab.toString()}>
            <HeritageTab tabId={'1'} options={this.props.options.heritage} />
            <TabPane tabId="2">
              <div className="form-group">
                <CreatableSelect
                  isClearable
                  onChange={this.handleDistilleryChange}
                  options={
                    this.props.options.distilleries &&
                    this.props.options.distilleries
                      .map(distillery => {
                        return {
                          label: distillery.label,
                          value: distillery.value.toString()
                        };
                      })
                      .sort((a, b) => {
                        if (a.name > b.name) {
                          return 1;
                        }
                        if (a.name < b.name) {
                          return -1;
                        }
                        return 0;
                      })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </TabPane>
            <TabPane tabId="3">...</TabPane>
          </TabContent>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
