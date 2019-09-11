import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
class AddUser extends Component {
  // coding to add user
  constructor(props) {
    super(props);

    this.state = {
      formInputs: {
        first_name: "",
        last_name: "",
        email_id: "",
        password: ""
      },
      redirect: false,
      showSuccess: ""
    }

  }
  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    if (this.props.match.params.id) {
      axios.get('http://localhost:4000/api/auth/getuserbyid/' + this.props.match.params.id)
        .then(res => {
          console.log(res);
          this.setState({
            formInputs: res.data.data
          });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
  onChangeEvent = (event) => {

    let newFormInputs = this.state.formInputs;
    newFormInputs[event.target.name] = event.target.value;
    this.setState({
      formInputs: newFormInputs
    })
  }

  onSubmitGetData = (e) => {
    e.preventDefault();


    const url = e.target.value === "Update" ? 'http://localhost:4000/api/auth/updateuserbyid/' + this.props.match.params.id :
      'http://localhost:4000/api/auth/registration/';

    const { formInputs } = this.state;

    if (e.target.value === "Update" && this.props.match.params.id !== null) {
      console.log(formInputs);
      axios.put(url, formInputs)
        .then((res) => {
          this.setState({ showSuccess: "Updated" });
        }).catch((err) => {
          console.log(`Something went wrong ${err.response.data.message}`);
        });
    } else {

      axios.post(url, formInputs)
        .then((res) => {
          this.setState({ showSuccess: "saved" });
        }).catch((err) => {
          console.log(err);
          console.log(`Something went wrong ${err.response.data.message}`);
        });
    }
  }

  render() {
    const { redirect, showSuccess } = this.state;
    const userId = this.props.match.params.id;
    const buttonChange = this.props.match.params.id === undefined ? "Add" : "Update";
    if (redirect) {
      return <Redirect to='/users' message={"User successfully added"} />;
    }
    return (
      <div>
        <div className="page-header">
          <h1>{buttonChange} User</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="first_name">First name:</label>
            <input type="text" name="first_name" onChange={(e) => { this.onChangeEvent(e) }} value={this.state.formInputs.first_name} className="form-control" id="first_name" />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last name:</label>
            <input type="text" name="last_name" onChange={(e) => { this.onChangeEvent(e) }} value={this.state.formInputs.last_name} className="form-control" id="last_name" />
          </div>
          <div className="form-group">
            <label htmlFor="email_id">Email Id:</label>
            <input type="text" name="email_id" onChange={(e) => { this.onChangeEvent(e) }} value={this.state.formInputs.email_id} className="form-control" id="email_id" />
          </div>
          {userId === undefined &&
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="text" name="password" onChange={(e) => { this.onChangeEvent(e) }} value={this.state.formInputs.password} className="form-control" id="password" />
            </div>
          }
          <div className="form-group">
            <button type="button" value={buttonChange} onClick={(e) => { this.onSubmitGetData(e) }} className="btn btn-primary">{buttonChange}</button>
          </div>
          {showSuccess && (
            <SweetAlert
              success
              title="Saved Successfully"
              onConfirm={() => {
                this.setState({ showSuccess: '', redirect: true });
              }}
            >
              {showSuccess}
            </SweetAlert>
          )}
        </form>

      </div>
    )
  }

}
export default AddUser
  ;