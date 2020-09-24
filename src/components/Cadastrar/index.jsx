import React from 'react';

import { Link } from 'react-router-dom';

import "./style.css"

export default props => {
    return (
        <div className="cadastro">
            <h1>Cadastrar</h1>

            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nome</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome" />
                    <small id="emailHelp" class="form-text text-muted">Escolha um nome de login.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
                </div>
                <div className="btn">
                    <Link to="/">Cancelar</Link>
                    <button type="submit" class="btn btn-primary">Confirmar</button>
                </div>

            </form>

        </div>
    )
}