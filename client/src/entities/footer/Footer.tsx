import React, { FC } from 'react'
import './FooterStyle.css'

const Footer: FC = () => (
  <div>
    <div className="footer-wrapper">
      <footer className="footer">
        <span className="border" />
        <div className="language">
          <a href="#">
            <img src="images/rus.png" alt="" />
          </a>
          <a href="#">
            <img src="images/eng.png" alt="" />
          </a>
        </div>
        <span className="copiryght">© 2018 - WebIUS ARM v.0.01b</span>
      </footer>
    </div>
  </div>
)

export default Footer
