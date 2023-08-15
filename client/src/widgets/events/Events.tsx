import React, { FC, useContext, useEffect } from 'react'
import '../../app/App.css'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import Event from './Event'

const Events: FC = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    store.getEvents()
  }, [])

  return (
    <div>
      <div className="col-wrap">
        <div className="content-block flex-row col-12x">
          <h2>ATMs with new Events</h2>
        </div>
      </div>
      <div className="atm-list">
        {store.atmEvents.map((item, index) => (
          <Event id={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default observer(Events)
