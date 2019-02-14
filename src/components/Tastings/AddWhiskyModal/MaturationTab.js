import React from 'react';
import { TabPane, Row, InputGroup, Input, InputGroupAddon, Button, ButtonGroup } from 'reactstrap';
import CreatableSelect from 'react-select/lib/Creatable';
import { sortAlphabeticly } from '../../../utils/sortAlphabeticly';
import { getObjectFromValue } from '../../../utils/getObjectFromValue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MaturationTab = ({
  tabId,
  maturations,
  maturationOptions,
  caskKindChange,
  specificationChange,
  finishChange,
  durationChange,
  durationUnitChange,
  maturationAdd,
  maturationRemove
}) => (
  <TabPane tabId={tabId.toString()}>
    {maturations &&
      maturations.map((maturation, index) => (
        <React.Fragment key={index}>
          <Row>
            <div className="col-6">
              <div className="form-group">
                <label>Fassart</label>
                <CreatableSelect
                  isClearable
                  onChange={event => {
                    caskKindChange(index, event);
                  }}
                  value={getObjectFromValue(maturation.caskKind, maturationOptions.caskKinds)}
                  options={
                    Boolean(maturationOptions && maturationOptions.caskKinds) &&
                    sortAlphabeticly(maturationOptions.caskKinds).map(caskKind => {
                      return {
                        label: caskKind.name,
                        value: caskKind.value.toString()
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Spezifikation</label>
                <CreatableSelect
                  isClearable
                  onChange={event => {
                    specificationChange(index, event);
                  }}
                  value={getObjectFromValue(
                    maturation.specification,
                    maturationOptions.specifications[maturation.caskKind]
                  )}
                  options={
                    Boolean(
                      maturationOptions &&
                        maturationOptions.specifications &&
                        maturationOptions.specifications[maturation.caskKind]
                    ) &&
                    sortAlphabeticly(maturationOptions.specifications[maturation.caskKind]).map(specification => {
                      return {
                        label: specification.name,
                        value: specification.value.toString()
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label>Reifedauer</label>
                <InputGroup>
                  <Input
                    type="number"
                    value={maturation.duration}
                    onChange={event => {
                      durationChange(index, event);
                    }}
                  />
                  <InputGroupAddon addonType="prepend">
                    <ButtonGroup>
                      <Button
                        className="form-control"
                        color="primary"
                        onClick={() => {
                          durationUnitChange(index, 'Y');
                        }}
                        active={maturation.durationUnit === 'Y'}
                      >
                        J
                      </Button>
                      <Button
                        className="form-control"
                        color="primary"
                        onClick={() => {
                          durationUnitChange(index, 'M');
                        }}
                        active={maturation.durationUnit === 'M'}
                      >
                        M
                      </Button>
                    </ButtonGroup>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={'finish-' + index}
                  checked={maturation.finish}
                  onChange={event => {
                    finishChange(index, event);
                  }}
                />
                <label htmlFor={'finish-' + index}>Nachreifung? </label>
              </div>
            </div>
            <Button
              color="default"
              className="btn-link btn-link-remove"
              onClick={() => {
                maturationRemove(index);
              }}
            >
              Diese Reifung entfernen <FontAwesomeIcon icon="trash" />
            </Button>
          </Row>
          <hr />
        </React.Fragment>
      ))}
    <Row>
      <Button color="default" className="btn-link" onClick={maturationAdd}>
        Weitere Reifung <FontAwesomeIcon icon="plus" />
      </Button>
    </Row>
  </TabPane>
);
