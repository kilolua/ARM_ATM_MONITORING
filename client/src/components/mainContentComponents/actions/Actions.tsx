import React, { FC, useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import ActionList from './ActionList'
import { Context } from '../../../index'

const Actions: FC = () => {
  const [search, setSearch] = useState<string>('');

  const {store} = useContext(Context);

  return (
    <div className="scroll-pane1">
      <div className="col-wrap">
        <div className="content-block col-12x">
          <div className="title">Actions</div>
        </div>
        <div className="content-block col-12x content-between">
          <div className="button-wrap">
            <a href="" className="btn btn-green">
              <i className="fa fa-plus-circle icon" />
              <span>Create Action</span>
            </a>
          </div>

          <div className="search-block-wrap right">
            <div className="search-block">
              <input
                type="text"
                className="input search"
                id="searchReq"
                placeholder="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              <button id="searchBtn" onClick={()=>{store.getActionsList(10, 1, search)}}>
                <i className="icon fa fa-search fa-2x" />
              </button>
            </div>
          </div>
        </div>
        <div className="content-block col-12x roles">
          <ActionList search={search} />
        </div>
      </div>
    </div>
  )
}

export default observer(Actions)
