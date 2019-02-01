import React from 'react';
import { TabPane } from 'reactstrap';

export const HeritageTab = ({
  tabId,
  heritage,
  selectedCountry,
  countryChange
}) => (
  <TabPane tabId={tabId}>
    <div className="form-group">
      <label htmlFor="country">Land</label>
      <select
        className="form-control"
        name="country"
        id="country"
        defaultValue={selectedCountry}
        onChange={countryChange}
      >
        {heritage.countries &&
          heritage.countries
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
    {Boolean(
      heritage.regions[selectedCountry] &&
        heritage.regions[selectedCountry].length
    ) && (
      <div className="form-group">
        <label htmlFor="region">Region</label>
        <select className="form-control" name="region" id="region">
          {heritage.regions[selectedCountry]
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
