import React, { FC } from 'react'
import UseIcon from '../../../../UI/Use'

const TemplateList: FC = () => {
  return (
    <div className="content-block col-12x">
      <div className="content-between align-center">
        <div className="title">Template list</div>
      </div>

      <table className="table">
        <tr className="table--item table-head">
          <th className="col">Name</th>
          <th className="col">Actions</th>
        </tr>
        <tr className="table--item">
          <td className="col">
            <div className="name">
              <div className="checkbox">
                <label htmlFor="check3">
                  <input id="check3" name="g1" type="checkbox"/>
                  <i className="fa fa-check"/>
                </label>
              </div>
              <span>Unregister ActiveX.Net 4</span>
            </div>
          </td>
          <td className="col content-between">
            <UseIcon/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default TemplateList