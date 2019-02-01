import React from 'react';
import { TabPane } from 'reactstrap';
import CreatableSelect from 'react-select/lib/Creatable';

export const DistilleryTab = ({ distilleries, tabId, distilleryChange }) => (
  <TabPane tabId={tabId}>
    <div className="form-group">
      <CreatableSelect
        isClearable
        onChange={distilleryChange}
        options={
          distilleries &&
          distilleries
            .map(distillery => {
              return {
                label: distillery.label,
                value: distillery.value.toString()
              };
            })
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
        }
      />
    </div>
    <div className="form-group">
      <input className="form-control" type="text" placeholder="Name" />
    </div>
  </TabPane>
);
