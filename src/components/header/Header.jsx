import React, { useEffect, useState } from "react";
import "./header.css";
import { links } from "../../Data";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

import { Link } from 'react-scroll';

import { animateScroll } from "react-scroll";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    },[]);

    // to hide the scrollbar when the nav is open
    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    return (
        <header className={`${scrollNav ? 'scroll-header ' : ''}header`}>
        <nav className="nav">
            <Link to="/" onClick={scrollTop} className="nav__logo text-cs">
            Senura
            </Link>

            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <div className="nav__data">
                    <ul className="nav__list">
                    {links.map(({ name, path }, index) => {
                        return (
                        <li className="nav__item" key={index}>
                            {/* <a href={path} className="nav__link text-cs">
                            {name}
                            </a> */}
                            <Link 
                                className="nav__link text-cs"
                                to={path} 
                                spy={true}
                                hashSpy={true} 
                                smooth={true} 
                                offset={-150} 
                                duration={500}
                                onClick={() => {setShowMenu(!showMenu)}}
                            >
                                {name}  
                            </Link>
                        </li>
                        );
                    })}
                    </ul>
                    <div className="header__socials">
                    <a href="" className="header__social-link">
                        <FaTwitter />
                    </a>

                    <a href="" className="header__social-link">
                        <FaInstagram />
                    </a>
                    </div>
                </div>
            </div>

            <div className="nav__btns">
                <div className="theme__toggle">
                    <BsSun />
                </div>
                
                <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => {setShowMenu(!showMenu)}}>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </nav>
        </header>
    );
};

export default Header;
