import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss' 





const Navbar = (props) =>{
    return(
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toolbar_toggle_button">

                </div>
                <div className="toolbar-logo">
                    <NavLink exact to ="/Home">
                    {/* <img alt="logo" /> */}
                    </NavLink>
                </div>
                <div className="spacer"/>
                <div className="toolbar_navigation_item">
                    <ul>
                        <li><NavLink exact to ="/Home" className="item" activeClassName="is-selected"> Home </NavLink></li>
                        <li><NavLink exact to ="/aboutMe" className="item" activeClassName="is-selected"> About Me </NavLink></li>
                        <li><NavLink exact to ="/contactMe" className="item" activeClassName="is-selected"> Contact Me </NavLink></li>

                    </ul>

                </div>
                

            </nav>
        </header>
    )
}


export default Navbar