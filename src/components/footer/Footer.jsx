import React from 'react'
import './footer.css';

import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="" className="footer__social-link">
                    <FaTwitter />
                </a>

                <a href="" className="footer__social-link">
                    <FaInstagram />
                </a>
            </div>

            <p className="footer__copyright text-cs">&copy; 2024<span> Senura Perera</span>. All Rights Reserved.</p>
            <p className="footer__copyright text-cs">Developed by <span>Senura Perera</span></p>
        </div>
    </footer>
  )
}

export default Footer