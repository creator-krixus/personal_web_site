import React from 'react';
/* Uso esta libreria para crear los pdf**/
import jsPDF from 'jspdf';
import './Body.css';
import file from '../../images/captura.png';
import foto from '../../images/abrazo3.png';

export default function Body() {
    /**Genero esta funcion para crear el pdf que el usuario va descargar */
    function pdfGenerate(){
        let doc = new jsPDF();
        doc.addImage(file, 'PNG', 10, 20, 190, 240);
        doc.save("new.pdf");
    }
    return (
        <div className="container">

            <div className="container__info">
                <h3>Discover</h3>
                <h1>About Me</h1>
                <div className="linea"></div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                Ratione enim, delectus numquam obcaecati consequatur odit<br />
                corrupti hic iusto saepe, alias incidunt porro nesciunt omnis<br />
                accusamus voluptatum blanditiis mollitia aliquid adipisci!</p>
                <div className="container__info-data">
                    <section className="one">
                        Nombre: Wilson Rueda<br/>
                        Telefono: +57 311 316 65 88<br/>
                        Experiencia: 1 año<br/>
                        Email: wilsonrueda2@gmail.com
                    </section>
                    <section className="two">
                        Pais: Colombia<br />
                        Residencia: Medellin
                    </section>
                </div>
                <button onClick={pdfGenerate}>Download cv</button> 
            </div>
            <div className="container__img">
                <img src={foto} alt="" width="100%"/>
            </div>
           
        </div>
    )
} 

