import React from 'react';
/* Uso esta libreria para crear los pdf**/
import jsPDF from 'jspdf';
import './Body.css';
import file from '../../images/hoja.png';
import foto from '../../images/abrazo3.png';
import file2 from '../../images/hoja1.png';
import Linea from '../linea/Linea'

export default function Body() {
    /**Genero esta funcion para crear el pdf que el usuario va descargar */
    function pdfGenerate(){
        let doc = new jsPDF();
        doc.addImage(file, 'PNG', 10, 20, 190, 240);
        doc.addPage()
        doc.addImage(file2, 'PNG', 10, 20, 190, 240);
        doc.save("Curriculum Wilson Rueda.pdf");
    }
    return (
        <div className="container">

            <div className="container__info">
                <h3 className="container__info-discover">Discover</h3>
                <h1 className="container__info-titulo">About Me</h1>
                <Linea />
                <p className="container__info-text">My name is Wilson Rueda. I`m a fullStack developer based in Medellin, Colombia<br />
                I`m very passionate and dedicated to my work. With 3 year experience<br />
                as a profesional FullStack developer, I have acquired skills necesary<br />
                to build greats website.</p>
                <div className="container__info-data">
                    <section className="one">
                        Name: Wilson Rueda<br/>
                        Phone: +57 311 316 65 88<br/>
                        Experience: 3 year<br/>
                        Email: wilsonrueda2@gmail.com<br/>
                    </section>
                    <section className="one">
                        Country: Colombia<br />
                        Address: Medellin
                    </section>
                </div>
                <button onClick={pdfGenerate} className="container__info-button">Download cv</button> 
            </div>
            <div className="container__img">
                <img src={foto} alt="" width="100%"/>
            </div>
           
        </div>
    )
} 

