import React, { FC, useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import '../../App.css'
import { Link } from 'react-router-dom'

const LeftMenu: FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  const { store } = useContext(Context)

  useEffect(() => {
    Promise.all([store.getMenu(), store.getPrivilages()]).then(() =>
      setIsLoading(false)
    )
  }, [])

  function renderMenuItems() {
    return store.menuItems.map((item) => renderMenuItem(item.name))
  }

  function renderMenuItem(name: string) {
    return (
      <div
        className="left-menu--item"
        onClick={() => store.setActivePage(name)}
      >
        <span>{name}</span>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="loader-wrap">
        <div className="background" />
        <div className="loader" />
        <div className="text">Загрузка</div>
      </div>
    )
  }

  return (
    <Link to="/">
      <div className="left-sidebar">
        <div className="left-menu">{renderMenuItems()}</div>
      </div>
    </Link>
  )
}

export default observer(LeftMenu)
