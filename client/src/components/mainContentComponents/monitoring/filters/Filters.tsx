import React, { FC, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../../index'
import Filter from './Filter'

const Filters: FC = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    store.getFilters()
  }, [])

  return (
    <div className="filters col-4x">
      <div className="content-block">
        <h3>Фильтры</h3>
        <span onClick={() => store.getMonitoringAtm()} className="toolbar">
          Показать
        </span>
        {store.monitoringFilters.map((item, index) => (
          <Filter ItemName={item.ItemName} States={item.States} key={index} />
        ))}
      </div>
    </div>
  )
}

export default observer(Filters)
