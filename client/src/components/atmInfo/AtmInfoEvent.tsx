import React from 'react'

interface PropsInterface {
  type: string
  date: string
  text: string
}

function AtmInfoEvent({ type, date, text }: PropsInterface): JSX.Element {
  return (
    <tr className="table--item red">
      <td className="col">{type}</td>
      <td className="col">{date}</td>
      <td className="col col_wide_20">{text}</td>
    </tr>
  )
}

export default AtmInfoEvent
