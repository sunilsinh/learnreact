import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    // let newFormInputs = this.state.formData.formFields;
    // newFormInputs[event.target.name] = event.target.value;
    // this.setState({
    //   formInputs: newFormInputs
    // })

    // console.log("a");
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

  // handleClick(event) {
  //   event.preventDefault();

  //   const { email_id, password } = this.state.formData.formFields;
  //   if (email_id === "s" && password === "s") {
  //     this.state.formData.loggedIn = true;
  //   }
  // }
  render() {
    return (
      <div >
        <div className="page-header">
          <h1>Login</h1>
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
            {/* <button type="button" value="login" onClick={(event) => this.handleClick(event)} className="btn btn-primary">Login</button> */}
            <button type="button" value="login" onClick={(usedata) => this.props.handleClick(this.state.formData.formFields)} className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return state;
}
//
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (userdata) => {
      return dispatch({ type: "HANDLE_CLICK", payload: userdata })
    }
  }
}
export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Login);