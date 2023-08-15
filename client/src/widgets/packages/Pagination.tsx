import React, { FC } from 'react'

const Pagination: FC = () => (
  <div className="pagination">
    <ul>
      <li>
        <a href="#" className="prev disabled">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#" className="active">
          4
        </a>
      </li>
      <li>
        <a href="#">5</a>
      </li>
      <li>
        <a href="#">…</a>
      </li>
      <li>
        <a href="#">999</a>
      </li>
      <li>
        <a href="#" className="next">
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
)

export default Pagination
