import React, { FC, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import Events from '../events/Events'
import Monitoring from '../monitoring/Monitoring'
import Packages from '../packages/Packages'
import Actions from '../actions/Actions'

const MainContentComponents: FC = () => {
  const { store } = useContext(Context)
  function renderSwitch() {
    switch (store.activePage) {
      case 'Events':
        return <Events />
      case 'Monitoring':
        return <Monitoring />
      case 'Configuration Packages':
        return <Packages />
      case 'Actions':
        return <Actions />
    }
  }
  return <div>{renderSwitch()}</div>
}

export default observer(MainContentComponents)
