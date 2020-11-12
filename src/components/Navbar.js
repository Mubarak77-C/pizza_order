import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar my-4">
        <div className="navbar_txt">
            <div className="logo"><img src="/img/logo.png" alt="logo img"/></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about us">About Us</a></li>
                <li><a href="#Shop">Shop</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Client">Client</a></li>
                
            
            </ul>
            
        </div>
        </nav>
    )
}

export default Navbar
