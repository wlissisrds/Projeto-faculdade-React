import { Link } from 'react-router-dom'
import React from 'react';
import "./style.css"

export default props => {
  return (
    <div id="reservar">
      <h1>Reservar</h1>
      <form>
        <div class="form-row">
          <div id="num-cartao" class="form-group col-md-6">
            <label for="inputEmail4">Numero do cartão de crédito</label>
            <input type="number" class="form-control" id="inputEmail4" placeholder="Num cartão" />
          </div>
          <div id="titular" class="form-group col-md-6">
            <label for="inputPassword4">Titular do cartão</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Nome titular" />
          </div>
        </div>
        <div id="form-row1">
          <div id="validade" class="form-group">
            <label for="inputAddress">Validade</label>
            <input type="date" class="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div id="cod" class="form-group">
            <label for="inputAddress2">Cod segurança</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Codigo" />
          </div>
        </div>
        <div id="form-row2" class="form-row">
          <div id="parcelas" class="form-group col-md-6">
            <label for="inputCity">Número de parcelas</label>
            <input type="number" class="form-control" id="inputCity" />
          </div>
          <div id="cpf" class="form-group col-md-4">
            <label for="inputState">CPF</label>
            <input type="number" class="form-control" id="inputCity" />
          </div>
          <div id="nascimento" class="form-group col-md-2">
            <label for="inputZip">Data nascimento</label>
            <input type="date" class="form-control" id="inputZip" />
          </div>
        </div>

      </form>
      <div id="btn-form">
        <Link to="/">Voltar</Link>
        <input type="submit" />
      </div>
    </div>
  )
}