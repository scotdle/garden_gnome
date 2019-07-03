import React from 'react'
import '../navbar.scss'

const NavBar = (props) => (
    <div className='navbar_item'>

        <a className={"nav_link"} href={props.Navhref}><img className={"navSVG"} src={props.NavItemSVG} alt="navsvg"/></a>
    </div>
);

export default NavBar;