import React from 'react';
import classnames from 'classnames';
import CreatableSelect from 'react-select/lib/Creatable';
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

export const AddWhiskyModal = ({
  isOpen,
  toggle,
  activeTab,
  selectTab,
  options,
  handleChange
}) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      <Pagination>
        <PaginationItem>
          <PaginationLink
            className={classnames({
              active: activeTab === 1
            })}
            onClick={() => {
              selectTab(1);
            }}
          >
            Heritage
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={classnames({
              active: activeTab === 2
            })}
            onClick={() => {
              selectTab(2);
            }}
          >
            Name
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={classnames({
              active: activeTab === 3
            })}
            onClick={() => {
              selectTab(3);
            }}
          >
            Kind
          </PaginationLink>
        </PaginationItem>
      </Pagination>
      <TabContent activeTab={activeTab.toString()}>
        <TabPane tabId="1">
          <div className="form-group" />
          <div className="form-group" />
        </TabPane>
        <TabPane tabId="2">
          <div className="form-group">
            <CreatableSelect
              isClearable
              onChange={handleChange}
              options={
                options.distilleries &&
                options.distilleries
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
            <input className="form-control" type="text" placeholder="Name" />
          </div>
        </TabPane>
        <TabPane tabId="3">...</TabPane>
      </TabContent>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>
        Do Something
      </Button>
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);
