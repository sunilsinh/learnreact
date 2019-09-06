import React, { Component } from 'react';
import axios from 'axios';
//import UserProps from './props/users';
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            showSuccess: ""
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
                this.setState({ showSuccess: "Successfully deleted" });
                this.getUsers();
            })
            .catch(err => console.log(err))
    }

    render() {
        let usersFields = [];
        const { showSuccess } = this.state;

        for (var i = 0; i < this.state.userList.length; i++) {
            usersFields.push(
                <tr key={i}>
                    <th>{i + 1}</th>
                    <th scope="row">{this.state.userList[i].first_name}</th>
                    <td>{this.state.userList[i].last_name}</td>
                    <td>{this.state.userList[i].email_id}</td>
                    <td>
                        <Link to={"/edituser/" + this.state.userList[i]._id} className="btn btn-primary">Edit</Link>
                        <button userid={this.state.userList[i]._id} onClick={(e) => this.onDelete(e)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        }


        return (
            <div className="row">
                <table className="table table-bordered table-striped">
                    <thead className="black white-text">

                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <td>
                                Actions
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {usersFields}
                    </tbody>
                </table>
                {showSuccess && (
                    <SweetAlert
                        success
                        title="Successfully Deleted"
                        onConfirm={() => {
                            this.setState({ showSuccess: '' });
                        }}
                    >
                        {showSuccess}
                    </SweetAlert>
                )}
            </div>

        )
    }

}
export default UsersList
    ;