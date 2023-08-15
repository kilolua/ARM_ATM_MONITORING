import React, { FC, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'

const AtmInfoMainStatus: FC = () => {
  const { store } = useContext(Context)

  return (
    <div className="col-wrap">
      <div className="col-12x">
        <div className="content-block">
          <div className="spoiler open">
            <div className="spoiler-head">
              <h3>ATM settings:</h3>
            </div>
            <div className="spoiler-body">
              <div className="state-element">
                <div className="state-element--item">
                  <div className="row">
                    <div className="label">Name:</div>
                    <div className="text">{store.currentId}</div>
                  </div>
                  <div className="row">
                    <div className="label">Info:</div>
                    <div className="text" />
                  </div>
                  <div className="row">
                    <div className="label">Группа:</div>
                    <div className="text" />
                  </div>
                </div>

                <div className="state-element--item">
                  <div className="row">
                    <div className="label">Configuration:</div>
                    <div className="text">Succes 2</div>
                  </div>
                  <div className="row">
                    <div className="label">Ref:</div>
                    <div className="text">Vasily Sirotkin</div>
                  </div>
                  <div className="row">
                    <div className="label">Registration date:</div>
                    <div className="text">27 июля 2018 в 16:15:26 МСК</div>
                  </div>
                </div>

                <div className="state-element--item">
                  <div className="row">
                    <div className="label">Address:</div>
                    <div className="text">
                      127349, Russia, Moscow, Altufevo highway 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(AtmInfoMainStatus)
