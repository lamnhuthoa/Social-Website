import React, { Fragment, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

export default function Header() {
    const [header, setHeader] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 700) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <div className={header ? "header-container active" : "header-container"}>
            <div className="header-content container">
                <a className="main-text header-logo" href="#"><p>H.</p></a>
                <div className="header-nav">
                    <ul className="d-flex flex-row align-items-center">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Responsive Nav Bar */}
            <Navbar />
        </div>
    )
}
