import React from 'react'
import { FilterItem } from '../../../../models/response/FiltersResponse'
import FilterValue from './FilterValue'

function Filter({ ItemName, States }: FilterItem) {
  return (
    <div className="spoiler open">
      <div className="spoiler-head">
        <h4>
          <b>{ItemName}</b>
        </h4>
      </div>
      <div className="spoiler-body">
        {States.map((item, index) => (
          <FilterValue
            id={item.id}
            Name={item.Name}
            Count={item.Count}
            key={index}
            ItemName={ItemName}
          />
        ))}
      </div>
    </div>
  )
}

export default Filter
