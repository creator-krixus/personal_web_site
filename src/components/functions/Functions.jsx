import React from 'react';
import './Functions.css';
import Linea from '../linea/Linea';

export default function functions() {
    return (
        <div className="container__functions">
            <h2 className="titulo-functions">What I Do</h2>
            <h1 className="titulo-functions-services">My services
            <Linea /></h1>
            
            <div className="container__information">
                <div className="container__desc">
                    <h2 className="container__desc-titulo">Principal Function</h2>
                    <ul>
                        <li className="item">Translate designs into a programming language.</li>
                        <li className="item">Develop the visual part of the web.</li>
                        <li className="item">Desing the structure of the web in the backend.</li>
                        <li className="item">Facilitate user navigation.</li>
                        
                    </ul>
                </div>
                <div className="container__desc">
                    <h2 className="container__desc-titulo">Daily Tasks</h2>
                    <ul>
                        <li className="item">Translate designs into a programming language.</li>
                        <li className="item">Ensure that the loading time of the website is short.</li>
                        <li className="item">Write maintainable code.</li>
                        <li className="item">Ensure that the website supports multiple browsers.</li>
                    </ul>
                </div>
                <div className="container__desc">
                    <h2 className="container__desc-titulo">Skills</h2>
                    <ul>
                        <li className="item">Program in Javascript, an object-oriented language.</li>
                        <li className="item">Program in HTML and CSS, used to layout.<br /></li>
                        <li className="item">Program in Node js, used to create API´s<br />
                         in the backend.</li>
                        <li className="item">Work with React and Vue frameworks.</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
