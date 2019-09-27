import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import { Nubank } from './containers/pages';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/nubank' component={Nubank} />
        </BrowserRouter>
    )
}