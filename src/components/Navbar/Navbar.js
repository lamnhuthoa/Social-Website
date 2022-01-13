
import React, {useState } from 'react'
import './Navbar.css'

export default function Navbar() {

    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if(window.scrollY >= 600) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <div className={navbar ? 'NavbarItems container active' : 'NavbarItems container'}>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fa fa-bars'}></i>
            </div>
            <ul className={click ? 'menu-items active' : 'menu-items'}>
                <li onClick={closeMobileMenu}><a href="#">Home</a></li>
                <li onClick={closeMobileMenu}><a href="#about">About</a></li>
                <li onClick={closeMobileMenu}><a href="#work">Work</a></li>
                <li onClick={closeMobileMenu}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
