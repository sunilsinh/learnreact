import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddUser extends Component {
    // coding to add user
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email_id: "",
            password: "",
            redirect: false,
        }

    }
    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        if (this.props.match.params.id) {
            axios.get('http://localhost:4000/api/auth/getuserbyid/' + this.props.match.params.id)
                .then(res => {
                    this.setState({
                        first_name: res.data.data.first_name,
                        last_name: res.data.data.last_name,
                        email_id: res.data.data.email,
                        password: res.data.data.password
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    onChangeEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitGetData = (e) => {
        e.preventDefault();


        const url = e.target.value === "Update" ? 'http://localhost:4000/api/auth/updateuserbyid/' + this.props.match.params.id :
            'http://localhost:4000/api/auth/registration/';
        
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email_id,
            password: this.state.password

        };
        if (e.target.value === "Update" && this.props.match.params.id!==null) {
            axios.put(url, obj)
                .then((res) => {
                    this.setState({ redirect: true });
                }).catch((err) => {
                    console.log(`Something went wrong ${err}`);
                });
        }else {
            axios.post(url, obj)
                .then((res) => {
                    this.setState({ redirect: true });
                }).catch((err) => {
                    console.log(`Something went wrong ${err}`);
                });
        }



    }

    //
    render() {
        const { redirect } = this.state;
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
                        <input type="text" name="first_name" onChange={(e) => { this.onChangeEvent(e) }} value={this.state.first_name} className="form-control" id="first_name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last name:</label>
                        <input type="text" name="last_name" onChange={(e) => { this.onChangeEvent(e) }} value={this.state.last_name} className="form-control" id="last_name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email_id">Email Id:</label>
                        <input type="text" name="email_id" onChange={(e) => { this.onChangeEvent(e) }} value={this.state.email_id} className="form-control" id="email_id" />
                    </div>
                    {userId === undefined &&
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="text" name="password" onChange={(e) => { this.onChangeEvent(e) }} value={this.state.password} className="form-control" id="password" />
                        </div>
                    }
                    <div className="form-group">
                        <button type="button" value={buttonChange} onClick={(e) => { this.onSubmitGetData(e) }} className="btn btn-primary">{buttonChange}</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default AddUser
    ;