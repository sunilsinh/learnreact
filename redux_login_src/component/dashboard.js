import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    let loginCheck = true;
    const token = localStorage.getItem("token");
    console.log("token" + token);
    console.log(token);
    if (token == null) {
      console.log("token null")
      loginCheck = false;
    }
    this.state = {
      loginCheck
    }

  }
  render() {
    if (this.state.loginCheck === false) {
      return <Redirect to="login" />
    }
    return (
      <div >
        <div className="page-header">
          <h1>Welcome User...</h1>
          <Link to="/logout">logout</Link>
        </div>
      </div>
    )
  }
}
export default Dashboard;