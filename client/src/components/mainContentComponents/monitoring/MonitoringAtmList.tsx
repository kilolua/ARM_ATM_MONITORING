import React, { FC, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { MonitoringAtmItem } from '../../../models/response/MonitoringResponse'
import { Context } from '../../../index'

const getAtmStatus = (flag: boolean) => (flag ? 'green' : 'red')

const renderAtmList = (atmItems: Array<MonitoringAtmItem>) =>
  atmItems.map((item) => (
  <Link to={`atm_info/${item.id}`}>
      <div className={`atm-list--item ${getAtmStatus(item.isOnline)}`}>
      {item.id}
    </div>
  </Link>
))

const MonitoringAtmList: FC = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    store.getMonitoringAtm()
  }, [])

  return (
    <div>
      <div className="atm-list">{renderAtmList(store.monitoringAtmItems)}</div>
    </div>
  )
}

export default observer(MonitoringAtmList)
