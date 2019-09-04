import React, { Component } from 'react';
import axios from 'axios';
import UserProps from './props/users';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = { userList: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/auth/getallusers/')
            .then(response => {
                this.setState({ userList: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    renderUserData() {
        return this.state.userList.map(function (userdata, i) {
            return <UserProps users={userdata} key={i} />;
        });
    }


    render() {
        return (
            <div className="row">
                <div className="page-header">
                    <h1>User's List</h1>
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
                        {this.renderUserData()}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default UsersList
    ;