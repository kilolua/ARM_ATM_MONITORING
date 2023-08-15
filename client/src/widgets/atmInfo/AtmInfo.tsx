import React, { FC, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { Context } from '../../index'
import AtmInfoMainStatus from './AtmInfoMainStatus'
import AtmInfoEvents from './AtmInfoEvents'
import AtmInfoMonitoring from './AtmInfoMonitoring'

const AtmInfo: FC = () => {
  const { store } = useContext(Context)

  const { id } = useParams() as any

  useEffect(() => {
    store.setCurrentId(id)
    store.getAtmInfo(id)
  }, [])

  return (
    <div>
      {store.isLoadinAtmData && (
        <>
          <AtmInfoMainStatus />
          <AtmInfoMonitoring />
          <AtmInfoEvents />
        </>
      )}
    </div>
  )
}

export default observer(AtmInfo)
