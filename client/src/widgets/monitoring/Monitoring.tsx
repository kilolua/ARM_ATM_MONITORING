import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import MonitoringAtmList from './MonitoringAtmList'
import MonitoringHeader from './MonitoringHeader'
import MonitoringStatus from './MonitoringStatus'
import Filters from './filters/Filters'

const Monitoring: FC = () => (
  <div>
    <MonitoringHeader />
    <div className="monitoring-wrap">
      <div className="col-8x">
        <MonitoringStatus />
        <MonitoringAtmList />
      </div>
      <Filters />
    </div>
  </div>
)

export default observer(Monitoring)
