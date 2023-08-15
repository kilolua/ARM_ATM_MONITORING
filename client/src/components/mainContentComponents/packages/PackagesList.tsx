import React, { FC } from 'react'

const PackagesList: FC = () => (
  <table className="table">
    <tr className="table--item table-head">
      <th className="col">Name</th>
      <th className="col">Changed</th>
      <th className="col"> </th>
      <th className="col"> </th>
      <th className="col"> </th>
      <th className="col"> </th>
    </tr>
    <tr className="table--item">
      <td className="col">rosbank-webius-configndc[v.1.0.0.34]</td>
      <td className="col">2022.09.14 16:49:58</td>
      <td className="col">
        <span className="link color-green">
          <i className="fa fa-download icon" />
          <span>Download</span>
        </span>
        <span className="link color-blue">
          <i className="fa fa-expand icon" />
          <span>Export</span>
        </span>
      </td>
      <td className="col">
        <span className="link color-yellow">
          <i className="fa fa-pencil icon" />
          <span>Edit</span>
        </span>
      </td>
      <td className="col">
        <span className="edit-link ">
          <i className="fa fa-copy icon" />
          <span>Create copy</span>
        </span>
      </td>
    </tr>
  </table>
)

export default PackagesList
