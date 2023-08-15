import React, { FC } from 'react'
import Pagination from './Pagination'
import PackagesList from './PackagesList'

const Packages: FC = () => (
  <div className="col-wrap">
    <div className="content-block col-12x">
      <div className="main-title">Configuration packages list</div>
    </div>

    <div className="content-block col-12x content-between">
      <div className="button-wrap">
        <a className="btn btn-green">
          <i className="fa fa-plus-circle icon" />
          <span>Create package</span>
        </a>
      </div>

      <div className="search-block-wrap">
        <div className="search-block">
          <input type="text" className="input search" placeholder="Поиск" />
          <button>
            <i className="icon fa fa-search fa-2x" />
          </button>
        </div>
      </div>
    </div>

    <div className="content-block col-12x roles">
      <PackagesList />
      <Pagination />
    </div>
  </div>
)

export default Packages
