import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class App extends Component {
  // Local state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     age: 0
  //   }
  // }
  // ageUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })
  // }
  // ageDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }
  render() {
    return (
      <div className="container" >
        <div className="page-header">
          <h1> Redux implementation</h1>
        </div>
        <div><span>Age {this.props.age}</span><br />
          <button className="btn btn-primary" onClick={this.props.ageUp}>Age Up</button>
          <button className="btn btn-danger" onClick={this.props.ageDown}>Age Down</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch({ type: "AGE_UP" }),
    ageDown: () => dispatch({ type: "AGE_DOWN" }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
