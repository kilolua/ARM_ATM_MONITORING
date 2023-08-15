import React, { FC } from 'react'

const EditActionHeader: FC<{name: string}> = ({name}) => {
  return (
    <div className="col-wrap">
      <div className="content-block">
        <div className="title main-title">
          <span>Edit action “{name}”</span>
          <a href="#" className="back-link">
            <i className="fa fa-angle-left fa-2x" />
            back to list
          </a>
        </div>
      </div>
    </div>
  )
}

export default EditActionHeader