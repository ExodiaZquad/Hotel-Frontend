import React from 'react'  //rafce
import { MenuItems } from './MenuItems'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="nav_all">
            <ul className="nav_menu">
                <a className="nav_exodia" href="#">EXODIA</a>
                <div className="nav_select">
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index} >
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </div> 
                <a className="nav_login" href="#">LOGIN</a>
            </ul>
        </nav>
    )
}

export default Navbar

