import React, { Component } from 'react';
import axios from 'axios';
//import UserProps from './props/users';
import { Link } from 'react-router-dom';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            message: ""
        };

    }
    componentDidMount() {
        this.getUsers();
    }
    getUsers = () => {

        axios.get('http://localhost:4000/api/auth/getallusers/')
            .then(response => {

                this.setState({ userList: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    onDelete = (e) => {
        const id = e.target.userid;

        axios.delete('http://localhost:4000/api/auth/deleteuserbyid/' + id)
            .then((data) => {
                this.setState({ message: "Successfully deleted" });
                this.getUsers();
            })
            .catch(err => console.log(err))
    }

    render() {
        let usersFields = [];

        for (var i = 0; i < this.state.userList.length; i++) {
            usersFields.push(
                <tr key={i}>
                    <th scope="row">{this.state.userList[i].first_name}</th>
                    <td>{this.state.userList[i].last_name}</td>
                    <td>{this.state.userList[i].email}</td>
                    <td>
                        <Link to={"/edituser/" + this.state.userList[i]._id} className="btn btn-primary">Edit</Link>
                        <button userid={this.state.userList[i]._id} onClick={(e) => this.onDelete(e)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        }
        
        console.log("welcome"+this.props.message);
        return (
            <div className="row">
                <div className="page-header">
                    <h1>User's List</h1>
                    {this.props.message!=="" &&
                    <div className="alert alert-success">
                    {this.state.message}
                    </div>
                    }
                </div>
                <table className="table table-bordered table-striped">
                    <thead className="black white-text">

                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <td>
                                Actions
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {usersFields}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default UsersList
    ;