import React, { Component } from 'react';
import Logo from './logo';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './../routes/router';

class Navigation extends Component {
    render() {
        const test = "/";
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href={test}>{Logo}</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="navbar-nav mr-auto"><Link to="/">Home</Link></li>
                            <li className="navbar-nav mr-auto">||<Link to="/users">Users</Link></li>
                            <li className="navbar-nav mr-auto">||<Link to="/adduser">Add User</Link></li>
                            <li className="navbar-nav mr-auto">||<Link to="/dashboard">Dashboard</Link></li>
                            <li className="navbar-nav mr-auto">||<Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </nav>
                <Routes />
            </Router>
        )
    }
}

export default Navigation;