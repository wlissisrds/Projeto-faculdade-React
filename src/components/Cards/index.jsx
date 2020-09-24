import React from 'react';
import './style.css';
import produtos from '../../data/produtos';
import { Link } from 'react-router-dom';


export default props => {

    function listItem() {
        return produtos.map(prod => {
            return (
                <li key={prod.id}>
                    <img src={prod.img} alt="" />
                    <h3>{prod.nome}</h3>
                    <p> <img src="./img/localizacao.png" alt="" />{prod.localizacao}</p>
                    <h4>R$: {prod.valor}</h4>
                    <Link id="link-reservar" to="/alugar">Reservar</Link>
                </li>
            )
        })
    }

    return (
        <div className="containerCard">
            
            <h5>Aproveite os melhores hoteis do Brasil com preços acessíveis.<br />Para voce e sua família. </h5>
            <h2>Hoteis</h2>

            <ul>
                {listItem()}
            </ul>
        </div>
    )
}