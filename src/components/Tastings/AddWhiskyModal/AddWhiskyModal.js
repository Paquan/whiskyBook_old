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
import { defaultWhiskySettings } from '../../../config/defaultWhiskySettings';
import { HeritageTab } from './HeritageTab';
import { DistilleryTab } from './DistilleryTab';
import { KindTap } from './KindTab';
import { MaturationTab } from './MaturationTab';
import { sortAlphabeticly } from '../../../utils/sortAlphabeticly';
import { RatingTab } from './RatingTab';

export class AddWhiskyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      distillery: null,
      name: '',
      country: 'SCT',
      region: 'SS',
      kind: 'SM',
      chillFiltered: true,
      colored: true,
      caskStrength: false,
      singleCask: false,
      maturations: [
        {
          caskKind: 'BOURBON',
          specification: null,
          duration: 3,
          durationUnit: 'Y',
          finish: true
        }
      ],
      rate: 1
    };
  }

  handleCountryChange = event => {
    const country = event.target.value;
    this.setState(prevState => ({
      country,
      region:
        prevState.country === country
          ? prevState.region
          : this.props.options.heritage.regions[country][0]
          ? sortAlphabeticly(this.props.options.heritage.regions[country])[0].value
          : null
    }));
  };

  handleRegionChange = event => {
    const region = event.target.value;
    this.setState({ region });
  };

  handleDistilleryChange = distillery => {
    if (!distillery || !distillery.__isNew__) {
      this.props.resetDistilleries();
    } else if (distillery.__isNew__) {
      this.props.addDistillery(distillery);
    }
    this.setState({
      distillery: distillery ? distillery.value : null
    });
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
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

  handleCaskKindChange = (index, caskKind) => {
    if (!caskKind || !caskKind.__isNew__) {
      this.props.resetCaskKinds();
    } else if (caskKind.__isNew__) {
      this.props.addCaskKind(caskKind);
    }
    this.setState(prevState => {
      const maturations = prevState.maturations;
      maturations[index].caskKind = caskKind ? caskKind.value : null;
      maturations[index].specification =
        prevState.maturations[index].caskKind === caskKind ? prevState.maturations[index].specification : null;
      return { maturations };
    });
  };

  handleSpecificationChange = (index, specification) => {
    if (!specification || !specification.__isNew__) {
      this.props.resetSpecification();
    } else if (specification.__isNew__) {
      this.props.addSpecification(specification);
    }
    this.setState(prevState => {
      const maturations = prevState.maturations;
      maturations[index].specification = specification ? specification.value : null;
      return { maturations };
    });
  };

  handleFinishChange = (index, event) => {
    const finish = event.target.checked;
    this.setState(prevState => {
      const maturations = prevState.maturations;
      maturations[index].finish = finish;
      return { maturations };
    });
  };

  handleDurationChange = (index, event) => {
    const duration = event.target.value;
    this.setState(prevState => {
      const maturations = prevState.maturations;
      maturations[index].duration = duration;
      return { maturations };
    });
  };

  handleDurationUnitChange = (index, unit) => {
    this.setState(prevState => {
      const maturations = prevState.maturations;
      maturations[index].durationUnit = unit;
      return { maturations };
    });
  };

  handleAddMaturation = () => {
    this.setState(prevState => {
      const maturations = prevState.maturations;
      prevState.maturations.push(defaultWhiskySettings.maturations[0]);
      return {
        maturations
      };
    });
  };

  handleRemoveMaturation = index => {
    this.setState(prevState => ({
      maturations: prevState.maturations.filter((maturation, i) => {
        return i !== index;
      })
    }));
  };

  handleRateChange = rate => {    
    this.setState({
      rate
    });
  };

  selectTab = tab => {
    this.setState({
      activeTab: Number(tab)
    });
  };

  cancelModal = () => {
    this.setState(prevState => ({ ...prevState, ...defaultWhiskySettings }));
    this.props.toggleModal();
  };

  selectNextTab = () => {
    // TODO: Handle when tab gets out of bounce
    this.setState(prevState => ({
      activeTab: prevState.activeTab + 1
    }));
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.cancelModal();
        }}
      >
        <ModalHeader
          toggle={() => {
            this.cancelModal();
          }}
        >
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
            <PaginationItem>
              <PaginationLink
                className={classnames({
                  active: this.state.activeTab === 4
                })}
                onClick={() => {
                  this.selectTab(4);
                }}
              >
                Reifung
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className={classnames({
                  active: this.state.activeTab === 5
                })}
                onClick={() => {
                  this.selectTab(5);
                }}
              >
                Bewertung
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <TabContent activeTab={this.state.activeTab.toString()}>
            <HeritageTab
              tabId={1}
              heritage={this.props.options.heritage}
              selectedCountry={this.state.country}
              selectedRegion={this.state.region}
              countryChange={this.handleCountryChange}
              regionChnage={this.handleRegionChange}
            />
            <DistilleryTab
              tabId={2}
              distilleries={this.props.options.distilleries}
              selectedDistillery={this.state.distillery}
              name={this.state.name}
              distilleryChange={this.handleDistilleryChange}
              nameChange={this.handleNameChange}
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
            <MaturationTab
              tabId={4}
              maturations={this.state.maturations}
              maturationOptions={this.props.options.maturation}
              caskKindChange={this.handleCaskKindChange}
              specificationChange={this.handleSpecificationChange}
              finishChange={this.handleFinishChange}
              durationChange={this.handleDurationChange}
              durationUnitChange={this.handleDurationUnitChange}
              maturationAdd={this.handleAddMaturation}
              maturationRemove={this.handleRemoveMaturation}
            />
            <RatingTab tabId={5} rateChange={this.handleRateChange} rate={this.state.rate} />
          </TabContent>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => {
              this.cancelModal();
            }}
          >
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
