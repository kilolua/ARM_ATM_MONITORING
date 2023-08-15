import React, { FC, useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { Context } from '../../../../index'
import EditActionHeader from './EditActionHeader'
import EditActionForm from './EditActionForm'
import UseIcon from '../../../../UI/Use'
import TemplateList from './TemplateList'
import { ActionsListItem } from '../../../../models/response/ActionsResponse'

const EditAction: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { store } = useContext(Context)

  const { id } = useParams() as any

  useEffect(() => {
    Promise.all([
      store.getAction(id),
      store.getDropDownListPlugin(store.actionEditCurrent.id),
    ]).then(() => setIsLoading(false))

    return () => {
      store.setActionEditCurrent({} as ActionsListItem)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="loader-wrap">
        <div className="background" />
        <div className="loader" />
        <div className="text">Загрузка</div>
      </div>
    )
  }

  return (
    <>
      <EditActionHeader name={store.actionEditCurrent.name} />
      <form>
        <div className="col-wrap">
          <EditActionForm />
          <TemplateList />
        </div>
      </form>
    </>
  )
}

export default observer(EditAction)
