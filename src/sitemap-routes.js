import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
        <Route exact={true} path='/' />
        <Route exact={true} path='/gallery/:id' />
    </Route>
);