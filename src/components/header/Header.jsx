import React from 'react';
import './Header.css';
import foto from '../../images/wilson.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return (
        <div className="header">
            <nav className="header__nav">
                <h1 className="header__titulo"><a href="/" className="header__titulo-enlace"><b>W</b>ARG</a></h1>
                <div className="header__routes">
                    <ul className="header__routes-list">
                        <a className="header__routes-items"  href="https://twitter.com/Wilson_Rueda_G"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="header__routes-items"  href="https://www.linkedin.com/in/wilson-rueda-63273b1ab/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className="header__routes-items"  href="https://github.com/creator-krixus"><FontAwesomeIcon icon={faGithub} /></a>
                    </ul>
                </div>
            </nav>
            <div className="header__info">
                <img src={foto} className="header__image" alt="Wilson"/>
                <h1 className="header__nombre">Wilson Rueda</h1>
                <p className="header__texto">Frontend Developer</p>
            </div>
        </div>
    )
}
