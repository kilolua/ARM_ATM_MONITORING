import React, { FC, useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import './LoginFormStyle.css'
import '../../App.css'

const LoginForm: FC = () => {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordStatus, setPasswordStatus] = useState<boolean>(true);

  const { store } = useContext(Context)

  return (
    <div className="login-form-wrap">
      <div className="login-form">
        <div className="title">Выполнить вход</div>
        <form action="">
          <div className="input-wrap">
            <div className="input-label">Имя пользователя</div>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              className="input"
              placeholder="Имя пользователя"
            />
            <span className="hint">
              <i className="fa fa-chevron-left" />
              <span>Подсказaка с ошибкой</span>
            </span>
          </div>
          <div className="input-wrap password">
            <div className="input-label">Пароль</div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={passwordStatus ? "password" : 'text'}
              className="input password-input"
              placeholder="Пароль"
            />
            <i onClick={()=>{setPasswordStatus(!passwordStatus)}} className={passwordStatus ? "fa fa-eye eye" : 'fa fa-eye eye openEye'} />
            <span className="hint">
              <i className="fa fa-chevron-left" />
              <span>Успех</span>
            </span>
          </div>
          <div className="input-wrap">
            <button
              onClick={() => store.login(userName, password)}
              className="btn btn-green-fill"
            >
              <i className="fa fa-sign-in" />
              <span>Выполнить вход</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default observer(LoginForm)
