import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInputs: {
        email_id: '',
        password: '',
        loginCheck: false
      }

    }
  }

  handleChange = event => {
    let newFormInputs = this.state.formInputs;
    newFormInputs[event.target.name] = event.target.value;
    this.setState({
      formInputs: newFormInputs
    });

  }
  handleClick(event) {
    event.preventDefault();

    var apiBaseUrl = "http://localhost:4000/api/auth/userlogin/";
    const { formInputs } = this.state;
    console.log(formInputs);
    axios.post(apiBaseUrl, formInputs)
      .then(res => {
        this.setState({
          loginCheck: true
        })

      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {
    if (this.state.loginCheck) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <div >
        <div className="page-header">
          <h1>Login</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="first_name">Username:</label>
            <input type="text" name="email_id" onChange={(e) => { this.handleChange(e) }} id="first_name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" onChange={(e) => { this.handleChange(e) }} className="form-control" id="password" />
          </div>
          <div className="form-group">
            <button type="button" value="login" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>

    )
  }
}

export default Login;