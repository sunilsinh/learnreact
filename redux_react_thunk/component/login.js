import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        loggedIn: false,
        formFields: {
          email_id: "",
          password: ""
        }
      }
    }
  }

  handleChange = event => {
    this.setState({
      formData: {
        loggedIn: false,
        formFields: {
          ...this.state.formData.formFields,
          [event.target.name]: event.target.value
        }
      }
    })
  }
  render() {

    return (
      <div >
        <div className="page-header">
          <h1>Login</h1>
          {this.props.formData.loggedIn &&
            <div className="alert alert-success" role="alert">
              Loading...
          </div>
          } {JSON.stringify(this.props.formData.formFields)}
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="first_name">Username:</label>
            <input type="text" name="email_id" id="first_name" onChange={(e) => this.handleChange(e)} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" onChange={(e) => this.handleChange(e)} className="form-control" id="password" />
          </div>
          <div className="form-group">
            <button type="button" value="login" onClick={(usedata) => this.props.handleClick(this.state.formData.formFields)} className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStoreToProps = (state) => {

  return {
    formData: {
      loggedIn: state.formData.loggedIn,
      formFields: {
        email_id: state.formData.formFields.email_id,
        password: state.formData.formFields.password
      }
    }
  }
}
//
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (userdata) => {
      return dispatch(actionCreator.addUserData(userdata))
    }
  }
}
export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Login);