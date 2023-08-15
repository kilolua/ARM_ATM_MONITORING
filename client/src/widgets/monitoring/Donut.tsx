import { observer } from 'mobx-react-lite'
import DonutChart from 'react-donut-chart'

import React, { useContext } from 'react'
import { Context } from '../../index'

function Donut() {
  const { store } = useContext(Context)

  return (
    <div>
      <DonutChart
        height={220}
        width={220}
        legend={false}
        data={[
          {
            label: 'Online',
            value: store.atmOnlineCount,
          },
          {
            label: 'Offline',
            value: store.atmOfflineCount,
          },
        ]}
        colors={['#6dc05e', '#ef553a']}
      />
    </div>
  )
}

export default observer(Donut)
