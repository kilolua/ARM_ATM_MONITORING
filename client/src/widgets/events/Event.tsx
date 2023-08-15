import React from 'react'
import { Link } from 'react-router-dom'

interface propInterface {
  id: string
}

function Event({ id }: propInterface) {
  return (
    <Link to={`atm_info/${id}`}>
      <div className="atm-list--item blue">{id}</div>
    </Link>
  )
}

export default Event
