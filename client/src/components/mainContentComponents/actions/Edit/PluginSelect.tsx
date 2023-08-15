import React, { FC, useContext, useEffect } from 'react'
import { Context } from '../../../../index'
import { observer } from 'mobx-react-lite'

const PluginSelect: FC = () => {
  const {store} = useContext(Context);

  return (
    <div className="row">
      <div className="input-label">Plugin</div>
      <div className="select-wrap">
        <select className="jq-selectbox__select">
          {store.actionEditPluginDropDown.map((item)=>{
            return <option>{item.Text}</option>
          })}
        </select>
      </div>
    </div>
  )
}

export default observer(PluginSelect);