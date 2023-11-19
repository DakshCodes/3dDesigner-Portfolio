import React, { useEffect, useLayoutEffect } from 'react'
import './Header.css'
import logo from '../../assets/Logo-3d.png'
import gsap from 'gsap';
import Magnetic from '../../common/Magnetic';
import { Link } from 'react-router-dom';

const addEventOnElements = (elements, eventType, callback) => {
    elements.forEach((element) => {
        element.addEventListener(eventType, callback);
    });
};
const Header = () => {
    const toggleNavbar = () => {
        const navbar = document.querySelector("[data-navbar]");
        const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
        const overlay = document.querySelector("[data-overlay]");

        navbar.classList.toggle("active");
        navToggleBtn.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("nav-active");
    };

    useEffect(() => {
        const navTogglers = document.querySelectorAll("[data-nav-toggler]");
        addEventOnElements(navTogglers, "click", toggleNavbar);

    }, []);

    return (
        <>
            <header className="header" data-header>
                <div className="container">
                    <Link to={'/'}>
                        <img id="logo" src={logo} alt="Pfolio home" />
                    </Link>
                    <button className="nav-toggle-btn" data-nav-toggler data-nav-toggle-btn aria-label="Toggle menu">
                        <span className="line line-1" />
                        <span className="line line-2" />
                    </button>
                    <nav className="navbar" data-navbar>
                        <ul className="navbar-list">

                            <Link to={'/'}>
                                <li data-nav-toggler>
                                    <a href="#" className="navbar-link">Home</a>
                                </li>
                            </Link>

                            <Link to={'/works'}>
                                <li data-nav-toggler>
                                    <a href="#" className="navbar-link">Portfolio</a>
                                </li>
                            </Link>

                            <Link to={'/about'}>
                                <li data-nav-toggler>
                                    <a href="#" className="navbar-link">About</a>
                                </li>
                            </Link>
                            
                            <Link to={'/contact'}>
                                <li data-nav-toggler>
                                    <a href="#" className="navbar-link">Contact</a>
                                </li>
                            </Link>


                        </ul>
                    </nav>
                    <div className="overlay" data-nav-toggler data-overlay />
                </div>
            </header>

        </>
    )
}

export default Header
