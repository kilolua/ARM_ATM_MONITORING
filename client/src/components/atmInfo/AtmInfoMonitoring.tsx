import React, { FC } from 'react'

const AtmInfoMonitoring: FC = () => (
  <div className="col-wrap">
    <div className="content-block col-12x">
      <h3>ATM monitoring values</h3>

      <div className="monitoring-data">
        <div className="row">
          <div className="monitoring-data--item col-2x">
            <div className="spoiler open green">
              <div className="spoiler-head">
                <span>WebIUSUpdaterInfo</span>
              </div>
              <div className="spoiler-body">
                <ul>
                  <li>
                    <span>Success 2</span>
                  </li>
                  <li>
                    <span className="label">state:</span>
                    <span>installed</span>
                  </li>
                  <li>
                    <span>
                      <b>packages</b>
                    </span>
                    <ul>
                      <li>
                        <span>Success 2</span>
                      </li>
                      <li>
                        <span className="label">state:</span>
                        <span>installed</span>
                      </li>
                      <li>
                        <span className="label">state:</span>
                        <span>installed</span>
                      </li>
                      <li>
                        <span className="label">state:</span>
                        <span>installed</span>
                      </li>
                      <li>
                        <span className="label">state:</span>
                        <span>installed</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="label">state:</span>
                    <span>installed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AtmInfoMonitoring
