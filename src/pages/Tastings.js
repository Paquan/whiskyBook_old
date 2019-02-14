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

  handleAddDistillery = newDistillery => {
    newDistillery.name = newDistillery.label;
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

  handleAddCaskKind = newCaskKind => {
    newCaskKind.name = newCaskKind.label;
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        maturation: {
          ...prevState.options.maturation,
          caskKinds: [...prevState.options.maturation.caskKinds, newCaskKind]
        }
      }
    }));
  };

  handleResetCaskKinds = () => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        maturation: {
          ...prevState.options.maturation,
          caskKinds: prevState.options.maturation.caskKinds.filter(caskKind => {
            return !caskKind.__isNew__;
          })
        }
      }
    }));
  };

  handleAddSpecification = newSpecification => {
    newSpecification.name = newSpecification.label;
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        maturation: {
          ...prevState.options.maturation,
          specifications: [...prevState.options.maturation.specifications, newSpecification]
        }
      }
    }));
  };

  handleResetSpecification = () => {
    this.setState(prevState => {
      const specifications = {};
      Object.keys(prevState.options.maturation.specifications).forEach(specification => {
        specifications[specification] = prevState.options.maturation.specifications[specification].filter(
          specification => {
            return !specification.__isNew__;
          }
        );
      });
      return {
        options: {
          ...prevState.options,
          maturation: {
            ...prevState.options.maturation,
            specifications
          }
        }
      };
    });
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
          addDistillery={this.handleAddDistillery}
          resetDistilleries={this.handleResetDistilleries}
          addCaskKind={this.handleAddCaskKind}
          resetCaskKinds={this.handleResetCaskKinds}
          addSpecification={this.handleAddSpecification}
          resetSpecification={this.handleResetSpecification}
        />
        {this.state.whiskies.length && <TastingsTable whiskies={this.state.whiskies} />}
      </PageContainer>
    );
  }
}
