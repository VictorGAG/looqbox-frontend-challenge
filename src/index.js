import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './pages/Pokedex';
import Erro from './pages/Erro';
import Hello from './pages/Hello';
import PokeInfo from './pages/PokemonInfo';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Hello} />
            <Route path="/pokedex" exact={true} component={App} />
            <Route path="/error" exact={true} component={Erro} />
            <Route path="/pokeinfo" exact={true} component={PokeInfo} />
        </Switch>
    </Router>
,document.getElementById('root'));
