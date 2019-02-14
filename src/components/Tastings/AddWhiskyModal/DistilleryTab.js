import React from 'react';
import { TabPane } from 'reactstrap';
import CreatableSelect from 'react-select/lib/Creatable';
import { sortAlphabeticly } from '../../../utils/sortAlphabeticly';
import { getObjectFromValue } from '../../../utils/getObjectFromValue';


export const DistilleryTab = ({ tabId, distilleries, selectedDistillery, distilleryChange, name, nameChange }) => (
  <TabPane tabId={tabId.toString()}>
    <div className="form-group">
      <label htmlFor="distillery">Brennerei</label>
      <CreatableSelect
        isClearable
        onChange={distilleryChange}
        value={getObjectFromValue(selectedDistillery, distilleries)}
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
      <input className="form-control" onChange={nameChange} value={name} type="text" placeholder="Name" />
    </div>
  </TabPane>
);
