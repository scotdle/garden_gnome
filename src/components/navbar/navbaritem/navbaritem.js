import React from 'react'
import '../navbar.scss'

const NavBar = (props) => (
    <div className='navbaritem'>
        <img className={"navSVG"} src={props.NavItemSVG} alt="navsvg"/>
        <a className={"navText"} href={props.Navhref}><h1>{props.NavName}</h1></a>
    </div>
);

export default NavBar;