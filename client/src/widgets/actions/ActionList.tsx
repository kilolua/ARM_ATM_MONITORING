import React, { FC, useContext, useEffect, useState } from 'react'
import ActionListItem from './ActionListItem'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'

interface propsI{
  search:string
}

const ActionList: FC<propsI> = ({search}) => {
  const { store } = useContext(Context)
  const [write, setWrite] = useState(false)
  const [page, setPage] = useState<number>(1);
  const [step, setStep] = useState<number>(10);

  const isPrivilage = () => {
    store.privilages.forEach((item) => {
      if (item.Name === 'Action') {
        setWrite(item.Write)
      }
    })
  }

  const renderPageNumber = ()=>{
    const rows = [];
    for (let i = 1; i <= store.actionsListPageCount; i++){
      rows.push(<li onClick={()=>{setPage(i)}}><a href="#" className={i===page ? "active" : ""}>{i}</a></li>)
    }
    return rows;
  }

  const renderPagination = ()=>{
    return (
      <>
        <li onClick={()=>{setPage(page === 1 ? page : page-1)}}><a href="#" className={page === 1 ? "prev disabled" : "prev"}><i className='fa fa-chevron-left' aria-hidden='true'/></a></li>
        {renderPageNumber()}
        <li onClick={()=>{setPage(page === store.actionsListPageCount ? page : page+1)}}><a href="#" className={page === store.actionsListPageCount ? "next disabled" : "next"}><i className='fa fa-chevron-right' aria-hidden='true'/></a></li>
      </>
    )
  }

  useEffect(() => {
    store.getActionsList(step, page, search);
    isPrivilage()
  }, [page])

  return (
    <>
      <table className="table">
        <tr className="table--item table-head">
          <th className="col">Name</th>
          <th className="col">PluginName</th>
          <th className="col" />
          <th className="col" />
        </tr>
        {store.actionsList.map((item, index) => {
          return <ActionListItem search={search} step={step} page={page} key={index} data={item} write={write} />
        })}
      </table>
      <div className="pagination">
        <ul>
          {renderPagination()}
        </ul>
      </div>
    </>
  )
}

export default observer(ActionList)
