import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell, faExpand, faGear, faPassport, faSearch, faTrain, faUserCircle} from "@fortawesome/free-solid-svg-icons"

import './navbar.scss'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
      
       <div className="logo">
       <FontAwesomeIcon icon={faTrain} />
        <span>AdminPanel</span>

       </div>
       <div className="icons">
        
       <FontAwesomeIcon icon={faSearch} />
       <FontAwesomeIcon icon={faPassport} />
       <FontAwesomeIcon icon={faExpand} />

     
        <div className="notification">
        <FontAwesomeIcon icon={faBell} />
        <span>1</span>

        </div>
        <div className="user">
        <FontAwesomeIcon icon={faUserCircle} />
        <span>Abbas</span>

        </div>
        
        <FontAwesomeIcon icon={faGear} />

       </div>
      </div>
    </>
  )
}

export default Navbar
