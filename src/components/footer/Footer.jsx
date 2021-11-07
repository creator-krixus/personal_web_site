import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="container__footer">
            <div className="container__copyright">
                <h3 className="footer__text">Copyright © {new Date().getFullYear()}. All Rights Reserved.</h3>
            </div>
            
            <div className="container__contactos">
                <h2 className="footer__titulo">Contactame</h2>
                <a href="https://api.whatsapp.com/send?phone=+573113166588&text=¡Hello I need your services!"><FontAwesomeIcon icon={faWhatsapp} className="footer__items"/></a>
            </div>
        </div>
        
    )
}
