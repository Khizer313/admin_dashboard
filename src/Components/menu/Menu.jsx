import React from 'react'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

//import {faHome, faUser} from "@fortawesome/free-solid-svg-icons"
import './menu.scss'
import { Link } from 'react-router-dom'
import { menu } from '../../data'


const Menu = () => {
  return (
    <>
      
     <div className="menu">
{/* menu ky sary options ko style krlia ar zyada code likhny sy bchny kylia as a data store krlea data.js mein ar fr data.js sy import krlea ,ar map function ki madad sy use krlea */}
     {menu.map((item)=>(

     
      <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
       {item.listItems.map((listItem)=>(

         <Link className='listItem' to='/' key={listItem.id}>
        <h4>{listItem.icon}</h4>
        <span className="listItemTitle">{listItem.title}</span>
        </Link>
     )) }
        
      </div>
      ))}
   </div>



    </>
  )
}

export default Menu
