import React from 'react';
import classnames from 'classnames';
import CreatableSelect from 'react-select/lib/Creatable';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  TabContent,
  PaginationLink,
  PaginationItem,
  Pagination,
  TabPane
} from 'reactstrap';

export const AddNewWhiskyModal = ({ isOpen, toggle, activePage, selectPage }) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      <Pagination>
        <PaginationItem>
          <PaginationLink
            className={classnames({
              active: activePage === '1'
            })}
            onClick={() => {
              selectPage('1');
            }}
          >
            Name
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={classnames({
              active: activePage === '2'
            })}
            onClick={() => {
              selectPage('2');
            }}
          >
            Kind
          </PaginationLink>
        </PaginationItem>
      </Pagination>
      <TabContent activeTab={activePage}>
        <TabPane tabId="1">
          <Form>
            <div className="form-group">
              <CreatableSelect
                onChange={this.handleChange}
                options={
                  this.state.options.distilleries &&
                  this.state.options.distilleries
                    .map(disillery => ({
                      value: disillery,
                      label: disillery
                    }))
                    .sort((a, b) => {
                      if (a.value > b.value) {
                        return 1;
                      }
                      if (a.value < b.value) {
                        return -1;
                      }
                      // a muss gleich b sein
                      return 0;
                    })
                }
              />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Name" />
            </div>
          </Form>
        </TabPane>
        <TabPane tabId="2">...</TabPane>
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
