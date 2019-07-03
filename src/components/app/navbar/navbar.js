import React from 'react'
import './navbar.scss'
import NavBarItem from "./navbaritem/navbaritem"
import Logo from "./logo/logo"
import LogoSVG from "./../../../assets/images/logo.svg"
import SClogo from "./../../../assets/images/nav_svg_icons/sclogo.svg"
import GitHub from "./../../../assets/images/nav_svg_icons/github.svg"



const NavBar = () => (
    <div className="sidebar">
        <Logo logo={LogoSVG}/>
            <hr className={'divider'}/>
        <div className={'all_navbar_items'}>
        <NavBarItem Navhref={"#home"} NavItemSVG={SClogo}/>
        <NavBarItem Navhref={"#home"} NavItemSVG={GitHub}/>

        </div>
    </div>);

export default NavBar;