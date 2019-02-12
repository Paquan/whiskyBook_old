import React from 'react';
import { TabPane, Button, ButtonGroup } from 'reactstrap';
import { sortAlphabeticly } from '../../../utils/sortAlphabeticly';

export const KindTap = ({
  tabId,
  kinds,
  selectedKind,
  kindChange,
  chillFiltered,
  chillFilteredChange,
  colored,
  coloredChange,
  caskStrength,
  caskStrengthChange,
  singleCask,
  singleCaskChange
}) => (
  <TabPane tabId={tabId.toString()}>
    <div className="form-group">
      <label htmlFor="kind">Art</label>
      <select
        className="form-control"
        name="kind"
        id="kind"
        defaultValue={selectedKind}
        onChange={kindChange}
      >
        {kinds &&
          sortAlphabeticly(kinds).map(kind => (
            <option key={kind.value} value={kind.value}>
              {kind.name}
            </option>
          ))}
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="chilledFiltered">Kühlgefiltert</label>
      <ButtonGroup>
        <Button
          className="form-control"
          color="primary"
          onClick={() => {
            chillFilteredChange(true);
          }}
          active={chillFiltered === true}
        >
          Ja
        </Button>
        <Button
          className="form-control"
          color="primary"
          onClick={() => {
            chillFilteredChange(false);
          }}
          active={chillFiltered === false}
        >
          Nein
        </Button>
      </ButtonGroup>
    </div>
    <div className="form-group">
      <label htmlFor="colered">Gefärbt</label>
      <ButtonGroup>
        <Button
          className="form-control"
          color="primary"
          onClick={() => {
            coloredChange(true);
          }}
          active={colored === true}
        >
          Ja
        </Button>
        <Button
          className="form-control"
          color="primary"
          onClick={() => {
            coloredChange(false);
          }}
          active={colored === false}
        >
          Nein
        </Button>
      </ButtonGroup>
    </div>
    <div className="form-group">
      <label htmlFor="colered">Cask Strength</label>
      <ButtonGroup>
        <Button
          className="form-control"
          color="primary"
          onClick={() => {
            caskStrengthChange(true);
          }}
          active={caskStrength === true}
        >
          Ja
        </Button>
        <Button
          className="form-control"
          color="primary"
          onClick={() => {
            caskStrengthChange(false);
          }}
          active={caskStrength === false}
        >
          Nein
        </Button>
      </ButtonGroup>
    </div>
    <div className="form-group">
      <label htmlFor="colered">Single Cask</label>
      <ButtonGroup>
        <Button
          className="form-control"
          color="primary"
          onClick={() => {
            singleCaskChange(true);
          }}
          active={singleCask === true}
        >
          Ja
        </Button>
        <Button
          className="form-control"
          color="primary"
          onClick={() => {
            singleCaskChange(false);
          }}
          active={singleCask === false}
        >
          Nein
        </Button>
      </ButtonGroup>
    </div>
  </TabPane>
);
