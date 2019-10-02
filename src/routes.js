import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import { Nubank } from './containers/pages';
import { LoginNubank } from './containers/pages';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Nubank} />
            <Route path='/nubank' exact component={Nubank} />
            <Route path='/nubank/login' component={LoginNubank} />
        </BrowserRouter>
    )
}