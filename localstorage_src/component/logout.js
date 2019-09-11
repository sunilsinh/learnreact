import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
class Logout extends Component {
constructor(props) {
    super(props);
    localStorage.clear("item");
}

  render() {
    const token = localStorage.getItem("token");
    console.log("token logout page" +token);
    return (
      <div >
        <h1>Succefully logged out. please<Link to="/login">login</Link></h1>
      </div>

    )
  }
}

export default Logout;