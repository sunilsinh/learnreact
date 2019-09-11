import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../component/home';
import NotFound from '../component/notFound';
import Login from '../component/login';
import Dashboard from '../component/dashboard';
import Logout from '../component/logout';



class Routes extends Component {

    render() {

        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/logout" component={Logout} />
                <Route path="/*" component={NotFound} />
                <Route component={Error} />
            </Switch>
        )
    }


}
export default Routes;