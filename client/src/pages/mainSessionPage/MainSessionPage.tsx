import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import LeftMenu from '../../widgets/leftMenu/LeftMenu'
import MainContent from '../../widgets/mainContent/MainContent'

const MainSessionPage: FC = () => (
  <div>
    <LeftMenu />
    <MainContent />
  </div>
)

export default observer(MainSessionPage)
