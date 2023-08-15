import React, { FC, useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'

const MonitoringHeader: FC = () => {
  const { store } = useContext(Context)
  const [searchString, setSearchString] = useState('')

  return (
    <div className="col-wrap">
      <div className="content-block flex-row col-12x">
        <h2>ATM Monitoring</h2>

        <div className="search-block-wrap ">
          <div className="search-block">
            <input
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              type="text"
              className="input search"
              placeholder="Поиск"
            />
            <button onClick={() => store.getMonitoringAtm(searchString)}>
              <i className="icon fa fa-search fa-2x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(MonitoringHeader)
