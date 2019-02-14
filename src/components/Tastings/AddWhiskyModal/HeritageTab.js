import React from 'react';
import { TabPane } from 'reactstrap';
import { sortAlphabeticly } from '../../../utils/sortAlphabeticly';

export const HeritageTab = ({ tabId, heritage, selectedCountry, countryChange, regionChnage, selectedRegion }) => (
  <TabPane tabId={tabId.toString()}>
    <div className="form-group">
      <label htmlFor="country">Land</label>
      <select
        className="form-control"
        name="country"
        id="country"
        value={selectedCountry}
        onChange={countryChange}
      >
        {heritage.countries &&
          sortAlphabeticly(heritage.countries).map(country => (
            <option key={country.value} value={country.value}>
              {country.name}
            </option>
          ))}
      </select>
    </div>
    {Boolean(heritage.regions[selectedCountry] && heritage.regions[selectedCountry].length) && (
      <div className="form-group">
        <label htmlFor="region">Region</label>
        <select
          className="form-control"
          name="region"
          id="region"
          value={selectedRegion}
          onChange={regionChnage}
        >
          {sortAlphabeticly(heritage.regions[selectedCountry]).map((region, index) => (
            <option key={index} value={region.value}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
    )}
  </TabPane>
);
