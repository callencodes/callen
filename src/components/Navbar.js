import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiCardJackSpades} from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo">
            <GiCardJackSpades className='navnar-icon'/>
            CHLOE ALLEN
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;