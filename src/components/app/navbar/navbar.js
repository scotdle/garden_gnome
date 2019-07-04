import React from 'react'
import './navbar.scss'
import NavBarItem from "./navbaritem/navbaritem"
import Logo from "./logo/logo.js"
import NavLink from "./navlink/navlink.js"
import LogoSVG from "./../../../assets/images/logo.svg"
import SClogo from "./../../../assets/images/nav_svg_icons/sclogo.svg"
import GitHub from "./../../../assets/images/nav_svg_icons/github.svg"





const NavBar = () => (
    <div className="sidebar">
        <Logo logo={LogoSVG}/>
        <ul>
            <NavBarItem Title={'currently watching over a tomato plant.'} />
<div className={'navlinks'}>
        <NavLink LinkTo={"#home"} SVG={SClogo}/>
        <NavLink LinkTo={"#home"} SVG={GitHub}/>
</div>
        </ul>


    </div>

);

export default NavBar;