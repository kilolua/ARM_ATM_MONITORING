import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { FilterStatesItemWith } from '../../../models/response/FiltersResponse'
import { Context } from '../../../index'

function FilterValue({
 id, Name, Count, ItemName 
}: FilterStatesItemWith) {
  const { store } = useContext(Context)

  const [checked, setChecked] = useState(false)

  function setFilter() {
    setChecked((prevState) => {
      const curState = !prevState
      if (curState) store.setCurrentFiltersAdd(id, ItemName)
      else store.setCurrentFiltersRemove(id, ItemName)
      return !prevState
    })
  }

  return (
    <div className="checkbox">
      <label htmlFor="check4" onClick={setFilter}>
        <input checked={checked} type="checkbox" />
        <i className="fa fa-check" />
        <span>{Name}</span>
        <span className="input-label">{Count}</span>
      </label>
    </div>
  )
}

export default observer(FilterValue)
