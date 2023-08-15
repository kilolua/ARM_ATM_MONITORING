import React, { FC, useContext } from 'react'
import '../../App.css'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'

const Header: FC = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <div className="header">
        <div className="header-inner">
          <div className="logo left">
            <a href="/">
              <span className="color-blue font-bold">Web</span>
              <span className="color-orange font-bold">IUS</span>{' '}
              <span className="font-light">Workstation</span>
            </a>
          </div>

          <div className="top-menu">
            <div className="top-menu--item">
              <a href="#">О программе</a>
            </div>
            <div className="top-menu--item">
              <a href="">Контакты</a>
            </div>
            <div className="top-menu--item">
              <a href="#">Настройка меню</a>
            </div>
          </div>

          <div className="user-block">
            <a href="#" className="login header-col">
              {store.isAuth && <span onClick={() => {store.logout()}}>Выход</span>}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Header)
