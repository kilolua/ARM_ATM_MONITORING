import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect } from 'react'
import { ActionsListItem } from '../../models/response/ActionsResponse'
import { Context } from '../../index'
import ActionsServices from '../../services/ActionsServices'
import { Link } from 'react-router-dom'

interface ActionListItemProps {
  data: ActionsListItem
  write: boolean
  page: number
  step: number
  search: string
}

const ActionListItem: FC<ActionListItemProps> = ({ data, write, page, step, search}): JSX.Element => {
  const {store} = useContext(Context);
  const deleteAction = (id: string)=>{
    ActionsServices.deleteAction(id);
    store.getActionsList(step, page, search);
  }

  return (
    <tr className="table--item">
      <td className="col">{data.name}</td>
      <td className="col">{data.PluginName}</td>
      {write && (
        <Link to={`CustomAction/Edit/${data.id}`}>
          <td className="col">
            <a className="link color-yellow disable">
              <i className="fa fa-pencil icon" />
              <span>Edit</span>
            </a>
          </td>
        </Link>
      )}
      {data.packagesCount === 0 &&
      <td className="col" onClick={()=>{deleteAction(data.id)}}>
        <a href="#" className="delete-link">
          <i className="fa icon fa-close icon" />
          <span>Delete</span>
        </a>
      </td>
      }
    </tr>
  )
}

export default observer(ActionListItem)
