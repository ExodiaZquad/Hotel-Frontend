import React from 'react'  //rafce
import { MenuItems } from './MenuItems'
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul className="nav_menu">
                {MenuItems.map((item,index) => {
                    return (
                        <li key={index} >
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar

