import React, { Component } from 'react';

class UsersList extends Component {
    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead className="black white-text">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>dd</td>
                    </tr>
                </tbody>
            </table>
        )
    }

}
export default UsersList;