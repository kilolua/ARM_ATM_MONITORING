import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Routes, Route } from 'react-router-dom'
import MainContentComponents from '../../components/mainContentComponents/MainContentComponents'
import AtmInfo from '../../components/atmInfo/AtmInfo'
import EditAction from '../../components/mainContentComponents/actions/Edit/EditAction'

const MainContent: FC = (): JSX.Element => (
  <div className="content-wrapper">
    <Routes>
      <Route path="/" element={<MainContentComponents />} />
      <Route path="/atm_info/:id" element={<AtmInfo />} />
      <Route path="/CustomAction/Edit/:id" element={<EditAction />} />
    </Routes>
  </div>
)

export default observer(MainContent)
