import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
//import Search from './components/Search';

import Home from './pages/Home';
import Erro from './pages/Erro';

const Routes = () => {
    return(
        <BrowserRouter>
            
            <Header/>

            <Switch>

                <Route exact path="/" component={ Home } />
                <Route path="*" component= { Erro } />

            </Switch>

        </BrowserRouter>
    );
}

export default Routes;
