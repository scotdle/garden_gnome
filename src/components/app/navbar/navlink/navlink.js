import React from 'react'
import '../navbar.scss'

const NavBar = (props) => (

    <li><a href={props.LinkTo}><img className={"navlink"} src={props.SVG} alt={"svglink"}/></a></li>

);

export default NavBar;