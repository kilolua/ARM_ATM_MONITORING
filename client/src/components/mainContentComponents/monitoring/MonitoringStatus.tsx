import React, { FC, useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
import Donut from './Donut'

interface TimeObject {
  h: number
  m: number
  s: number
}

const MonitoringStatus: FC = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState<TimeObject>({ h: 0, m: 0, s: 0 })

  const { store } = useContext(Context)

  function refreshClock() {
    const today = new Date()
    const h = today.getHours()
    const m = today.getMinutes()
    const s = today.getSeconds()
    setTime({ h, m, s })
  }

  useEffect(() => {
    const today = new Date()
    setDate(today.toLocaleDateString('en-US'))
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className="content-block">
      <div className="spoiler open">
        <div className="spoiler-head">
          <h3>General state</h3>
        </div>
        <div className="spoiler-body">
          <div className="status-block">
            <Donut />
            <div className="status-block--info">
              <div className="row">
                <div className="status-block--info-item">
                  <div className="title">Дата:</div>
                  <div className="text">{date}</div>
                </div>
                <div className="status-block--info-item">
                  <div className="title">Время:</div>
                  <div className="text">
                    {`${time.h}:${time.m}`}
                    <span>{`:${time.s}`}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="status-block--info-item">
                  <div className="title">
                    Online ATM <span className="status-circle green" />
                  </div>
                  <div className="text">{store.atmOnlineCount}</div>
                </div>
                <div className="status-block--info-item">
                  <div className="title">
                    Offline ATM <span className="status-circle red" />
                  </div>
                  <div className="text">{store.atmOfflineCount}</div>
                </div>
              </div>
              <div className="row">
                <div className="status-block--info-item">
                  <div className="title">
                    No data ATM <span className="status-circle yellow" />
                  </div>
                  <div className="text">135</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(MonitoringStatus)
