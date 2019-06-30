import React from 'react'
import './navbar.scss'
import NavBarItem from "./navbaritem/navbaritem"

const NavBar = () => (
    <div className="sidebar">
        <NavBarItem Navhref={"#home"} NavName={"plant vitals"}/>
        <NavBarItem Navhref={"#about"} NavName={"about"}/>
    </div>);

export default NavBar;