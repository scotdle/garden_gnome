import React from 'react'
import '../navbar.scss'

const NavBar = (props) => (
    <div className='navbaritem'>
    <a href={props.Navhref}><h1>{props.NavName}</h1></a>
        <img src={props.navitemSVG} alt="navsvg"/>
    </div>
);

export default NavBar;