import React from 'react'
import logo from '../images/airbnb-logo.png';

function Navbar() {
    return (
        <nav className='nav'>
        <img src={logo} alt='logo' className='airbnb-logo'></img>
        </nav>
    )
}

export default Navbar