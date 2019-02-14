import React from 'react';
import { TabPane } from 'reactstrap';
import CreatableSelect from 'react-select/lib/Creatable';
import { sortAlphabeticly } from '../../../utils/sortAlphabeticly';

export const DistilleryTab = ({ distilleries, tabId, distilleryChange }) => (
  <TabPane tabId={tabId.toString()}>
    <div className="form-group">
      <label htmlFor="distillery">Brennerei</label>
      <CreatableSelect
        isClearable
        onChange={distilleryChange}
        options={
          distilleries &&
          sortAlphabeticly(distilleries).map(distillery => {
            return {
              label: distillery.name,
              value: distillery.value.toString()
            };
          })
        }
      />
    </div>
    <div className="form-group">
      <label>Name</label>
      <input className="form-control" type="text" placeholder="Name" />
    </div>
  </TabPane>
);
