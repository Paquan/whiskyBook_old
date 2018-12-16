import React from 'react';
// import classnames from 'classnames';
import { TabPane } from 'reactstrap';

let selectedCountry = 'SCT';

const handelCountryChange = event => {
  selectedCountry = event.target.value;
};

export const HeritageTab = ({ options, tabId }) => (
  <TabPane tabId={tabId}>
    <div className="form-group">
      <label htmlFor="country">Land</label>
      <select
        className="form-control"
        name="country"
        id="country"
        onChange={handelCountryChange}
      >
        {options.countries &&
          options.countries
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
            .map((country, index) => (
              <option key={index} value={country.value}>
                {country.name}
              </option>
            ))}
      </select>
    </div>
    {options.regions[selectedCountry] &&
      options.regions[selectedCountry].length && (
        <div className="form-group">
          <label htmlFor="region">Region</label>
          <select className="form-control" name="region" id="region">
            {options.regions[selectedCountry]
              .sort((a, b) => {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              })
              .map((region, index) => (
                <option key={index} value={region.value}>
                  {region.name}
                </option>
              ))}
          </select>
        </div>
      )}
  </TabPane>
);
