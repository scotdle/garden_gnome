import React from 'react'
import '../navbar.scss'

const Logo = (props) => (
    <div className='logo'>
        <img className={"logo"} src={props.logo} alt="logo"/>
    </div>
);

export default Logo;