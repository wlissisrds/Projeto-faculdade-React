import React from 'react';

import "./style.css"

export default props => {
    return (
        <div className="rodape">
            <div>
                <div id="img-footer">
                    <img src="./img/facebook.png" alt="" />
                    <img src="./img/instagram-esbocado.png" alt="" />
                    <img src="./img/twitter.png" alt="" />
                </div>
                <div id="mais-info">
                    <a href="">Quem somos</a>
                    <a href="">Vagas</a>
                    <a href="">Empresa</a>
                    <a href="">Central de ajuda</a>
                    <a href="">Condições de uso</a>
                    <a href="">Informações legais</a>
                </div>

            </div>

            <div id="logo-footer">
                <h1>GoodTrip</h1>
            </div>
        </div>
    )
}