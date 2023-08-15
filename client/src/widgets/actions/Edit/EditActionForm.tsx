import React, { FC, useContext, useState } from 'react'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import PluginSelect from './PluginSelect'

const EditActionForm: FC = () => {
  const { store } = useContext(Context)

  const [timeout, setTimeout] = useState<number | null>(
    store.actionEditCurrent.timeout
  )
  const [jsonValue, setJsonValue] = useState<string>(
    store.actionEditCurrent.param
  )

  return (
    <div className="content-block col-12x">
      <div className="title">Current action data</div>

      <div className="col-wrap edit-action-form">
        <div className="content-block col-6x">
          <div className="row">
            <div className="input-label">Name</div>
            <input
              value={store.actionEditCurrent.name}
              type="text"
              disabled
              className="input"
              placeholder="Enter action name"
            />
          </div>
          <div className="row">
            <div className="input-label">Timeout for action in seconds</div>
            <input
              type="number"
              className="input"
              value={timeout ?? ''}
              onChange={(e) => {
                setTimeout(
                  !Number.isNaN(e.target.valueAsNumber)
                    ? e.target.valueAsNumber
                    : null
                )
              }}
            />
          </div>
          <PluginSelect/>
        </div>
        <div className="content-block col-6x">
          <div className="row">
            <div className="input-label">JSON with parameters</div>
            <textarea
              className="textarea"
              placeholder="Enter JSON parameters"
              value={jsonValue}
              onChange={(e) => {
                setJsonValue(e.target.value)
              }}
            />
          </div>
        </div>
      </div>

      <div className="row button-wrap">
        <a className="btn btn-green-fill wide">
          <span>Save</span>
        </a>
      </div>
    </div>
  )
}

export default observer(EditActionForm)