import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../components/home';
import UserList from './../components/userList';
import UserInfo from './../components/userInfo';
import AddUser from './../components/addUser';
import NotFound from '../components/notFound';
import Login from '../components/login';
import Dashboard from '../components/dashboard';



class Routes extends Component {

    render() {

        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/userinfo" component={UserInfo} />
                <Route path="/users" component={UserList} />
                <Route path="/adduser" component={AddUser} />
                <Route path="/edituser/:id" component={AddUser} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/*" component={NotFound} />

                <Route component={Error} />
            </Switch>
        )
    }


}
export default Routes;