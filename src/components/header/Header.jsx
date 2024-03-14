import React from "react";
import "./header.css";
import { links } from "../../Data";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="" className="nav__logo text-cs">
          Senura
        </a>

        <div className="nav__menu">
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <a href={path} className="nav__link text-cs">
                      {name}
                    </a>
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
          
          <div className="nav__toggle">
            <span></span>
            <span></span>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;
