import React from 'react'
import './navbar.scss'
import NavBarItem from "./navbaritem/navbaritem"
import Logo from "./logo/logo"
import LogoSVG from "../../assets/images/logo.svg"
import plantLeafSVG from "../../assets/images/nav_svg_icons/leaf.svg"
import AboutSVG from "../../assets/images/nav_svg_icons/book.svg"


const NavBar = () => (
    <div className="sidebar">
        <Logo logo={LogoSVG}/>
        <NavBarItem Navhref={"#home"} NavName={"plant vitals"} NavItemSVG={plantLeafSVG}/>
        <NavBarItem Navhref={"#about"} NavName={"about plant"} NavItemSVG={AboutSVG}/>
    </div>);

export default NavBar;