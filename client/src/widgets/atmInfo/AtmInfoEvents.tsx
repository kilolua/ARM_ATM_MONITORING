import React, { FC, useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import AtmInfoEvent from './AtmInfoEvent'
import { Context } from '../../index'

const AtmInfoEvents: FC = () => {
  const { store } = useContext(Context)

  const [open, setOpen] = useState('open')

  return (
    <div
      className="col-wrap"
      onClick={() => setOpen(open === 'open' ? 'close' : 'open')}
    >
      <div className="content-block col-12x">
        <div className={`spoiler ${open}`}>
          <div className="spoiler-head">
            <h3>ATM последние события:</h3>
          </div>
          <div className="spoiler-body">
            <table className="table">
              <tr className="table--item table-head">
                <th className="col">Тип</th>
                <th className="col">Дата</th>
                <th className="col col_wide_20">Информация</th>
              </tr>
              {store.currentEvents.eventList.map((item, index) => (
                <AtmInfoEvent
                  type={item.event_type}
                  key={index}
                  date={item.event_date}
                  text={item.event_data}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(AtmInfoEvents)
