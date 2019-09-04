import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class UserProps extends Component {
    
    render() {
       
        return (
         
            <tr>
                <th scope="row">{this.props.users.first_name}</th>
                <td>{this.props.users.first_name}</td>
                <td>{this.props.users.last_name}</td>
                <td>
                <Link to={"/edituser/"+this.props.users._id} className="btn btn-primary">Edit</Link>
                </td>
            </tr>

        );
    }
}

export default UserProps;