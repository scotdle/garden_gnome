import React from 'react'
import '../navbar.scss'

const NavBar = (props) => (

    <li className={"navbar_item"}><h2>{props.Title}</h2></li>

);

export default NavBar;