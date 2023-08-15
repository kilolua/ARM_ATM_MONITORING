import React, { FC, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import LoginForm from '../../widgets/login/LoginForm'
import { Context } from '../../index'
import MainSessionPage from '../mainSessionPage/MainSessionPage'

const Main: FC = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    store.checkAuth()
  }, [])

  if (store.isLoading) {
    return (
      <div className="loader-wrap">
        <div className="background"/>
        <div className="loader"/>
        <div className="text">Загрузка</div>
      </div>
    )
  }

  return <div>{store.isAuth ? <MainSessionPage /> : <LoginForm />}</div>
}

export default observer(Main)
