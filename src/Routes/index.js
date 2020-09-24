
import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../components/Main/index';
import Cadastro from '../components/Cadastrar/index';
import Alugar from '..//components/alugar/index';


//switch nao permite mais de uma rota ser chama ao mesmo tempo
const Routes = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route  path="/cadastro" component={Cadastro}></Route>
                <Route  path="/alugar" component={Alugar}></Route>

            </Switch>
        </BrowserRouter>
    )

    export default Routes;