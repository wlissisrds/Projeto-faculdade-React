import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';



export default function Header(props) {
    return (
        <div className="containerHeader">


            <div className="titulo">
                <img id="logo" src="./img/hotel-logo.png" alt="logo-hotel" />
                <h1>{props.titulo}</h1>
            </div>


            <div className="listHeader">
                <ul>
                    <li><Link to="#">Quem somos</Link></li>
                    <li><Link to="#">Fale conosco</Link></li>
                    <li><Link to="#">Login</Link></li>
                    <li><Link to="/cadastro">Cadastrar</Link></li>
                </ul>

            </div>


        </div>
    )
}