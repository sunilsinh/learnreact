import React, { Component } from 'react';
import axios from 'axios';
class AddUser extends Component {
    // coding to add user
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email_id: "",
            password: ""
        }

    }
    // Get username
    onChangeFirstName = (e) => {

        this.setState({
            first_name: e.target.value
        })
    }
    // Get username
    onChangeLastName = (e) => {

        this.setState({
            last_name: e.target.value
        })
    }
    // Get username
    onChangeEmailId = (e) => {

        this.setState({
            email_id: e.target.value
        })
    }
    // Get username
    onChangePassword = (e) => {

        this.setState({
            password: e.target.value
        })
    }
    // Get username
    onSubmitGetData = (e) => {
        e.preventDefault();
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email_id,
            password: this.state.password
        };
        axios.post('http://localhost:4000/api/auth/registration/', obj)
            .then((res) => {
                console.log(res.data);

            }).catch((err)=>{
                console.log(`Something went wrong ${err}`);
            });
    }

    //
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Add New User</h1>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="first_name">First name:</label>
                        <input type="text" onChange={this.onChangeFirstName} className="form-control" id="first_name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last name:</label>
                        <input type="text" onChange={this.onChangeLastName} className="form-control" id="last_name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email_id">Email Id:</label>
                        <input type="text" onChange={this.onChangeEmailId} className="form-control" id="email_id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="text" onChange={this.onChangePassword} className="form-control" id="password" />
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={this.onSubmitGetData} className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default AddUser
    ;