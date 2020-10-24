import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layouts from './././hoc/Layouts';
import Login from './components/Customers/Login';
import Register from './components/Customers/Register';
import Home from './components/Home';


const Routes = () => {
    return (
        <Layouts>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />

            </Switch>
        </Layouts>
    )
}
export default Routes;